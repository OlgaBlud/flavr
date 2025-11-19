import * as React from "react";
import Svg, { G, Path, SvgProps as RNSvgProps } from "react-native-svg";

interface MySvgProps extends RNSvgProps {
  color?: string;
  colorSecondary?: string;
}

const PostsIcon = ({
  width = 16,
  height = 16,
  color = "currentColor",
  colorSecondary = "transparent",
  ...props
}: MySvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill={colorSecondary}
    {...props}
  >
    <G clipPath="url(#clip0_778_31147)">
      <Path
        d="M15.3848 4.1377V0.5H11.7471V4.1377H15.3848ZM9.81934 4.1377V0.5H6.18164V4.1377H9.81934ZM4.25391 4.1377V0.5H0.616211V4.1377H4.25391ZM15.3848 9.93457V6.29688H11.7471V9.93457H15.3848ZM9.81934 9.93457V6.29688H6.18164V9.93457H9.81934ZM4.25391 9.93457V6.29688H0.616211V9.93457H4.25391ZM15.3848 15.5V11.8623H11.7471V15.5H15.3848ZM9.81934 15.5V11.8623H6.18164V15.5H9.81934ZM4.25391 15.5V11.8623H0.616211V15.5H4.25391Z"
        stroke={color}
      />
    </G>
  </Svg>
);
export default PostsIcon;
