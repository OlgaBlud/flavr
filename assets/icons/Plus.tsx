import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Plus = ({
  width = 14,
  height = 14,
  color = "currentColor",
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 14 14" fill="none" {...props}>
    <Path
      d="M6.72461 2.80176V10.6466"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.80176 6.72412H10.6466"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Plus;
