import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ArrowLeft = ({
  width = 24,
  height = 24,
  color = "white",
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.5 18.264L8.0667 12.8306C7.42503 12.189 7.42503 11.139 8.0667 10.4973L13.5 5.06396"
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowLeft;
