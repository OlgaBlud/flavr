import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ArrowLeft = ({
  width = 20,
  height = 20,
  color = "white",
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M12.5 16.5999L7.0667 11.1666C6.42503 10.5249 6.42503 9.4749 7.0667 8.83324L12.5 3.3999"
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

ArrowLeft.displayName = 'ArrowLeft';

export default ArrowLeft;
