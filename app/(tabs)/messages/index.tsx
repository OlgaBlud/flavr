import MessagesFilter from "@/components/MessagesFilter";
import MessagesList from "@/components/MessagesList";
import MessagesSearch from "@/components/MessagesSearch";
import MessagesTopBar from "@/components/MessagesTopBar";

import { SafeAreaView } from "react-native-safe-area-context";

export default function MessagesScreen() {
  return (
    <SafeAreaView className="bg-[#FDFBF9] flex-1 px-[20px]" edges={["top"]}>
      {/* _____________________________top bar messages__________________________ */}
      <MessagesTopBar />
      {/* _____________________________search messages__________________________ */}
      <MessagesSearch />
      {/* _____________________________filter__________________________ */}
      <MessagesFilter />
      {/* _____________________________messages list__________________________ */}
      <MessagesList />
    </SafeAreaView>
  );
}
