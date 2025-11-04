export interface TabBarIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}
export type GradientButtonProps = {
  text: string;
  icon?: any;
  onPress?: () => void;
};

export type SolidButtonProps = {
  text: string;
  icon?: any;
  onPress?: () => void;
};
export type StatItemProps = {
  icon: any;
  number: number | string;
  label: string;
};

export type isActiveButtonProps = {
  title: string;
  isActive?: boolean;
  onPress?: () => void;
};
export type Tag = {
  label: string;
};
