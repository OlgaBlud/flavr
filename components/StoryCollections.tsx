import { StoryCollection } from "@/type";
import { FlatList } from "react-native";
import StoryCollectionItem from "./StoryCollectionItem";

type Props = {
  storyCollections: StoryCollection[];
};

export default function StoryCollections({ storyCollections }: Props) {
  return (
    <FlatList
      data={storyCollections}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <StoryCollectionItem {...item} />}
    />
  );
}
