import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Save = ({
  width = 24,
  height = 24,
  color = "white",
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21L13.082 17.195C12.7593 16.9874 12.3837 16.877 12 16.877C11.6163 16.877 11.2407 16.9874 10.918 17.195L5 21Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Save;
