import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";
const ArrowDown = ({
  width = 25,
  height = 13,
  color = "currentColor",
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 25 13" fill="none" {...props}>
    <G clipPath="url(#clip0_858_7152)">
      <Path
        d="M17.9369 1.91396L18.994 2.9778L13.2016 8.7413C13.1088 8.8342 12.9985 8.90783 12.8771 8.95796C12.7557 9.00808 12.6256 9.0337 12.4943 9.03335C12.363 9.033 12.233 9.00668 12.1119 8.95591C11.9908 8.90513 11.8809 8.83091 11.7886 8.73751L6.02409 2.94304L7.08692 1.88589L12.4974 7.3244L17.9369 1.91396Z"
        fill={color}
      />
    </G>
  </Svg>
);
export default ArrowDown;
