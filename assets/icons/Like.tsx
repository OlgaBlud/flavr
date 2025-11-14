import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";

const Like = ({
  width = 16,
  height = 16,
  color = "white",
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
    <Defs>
      <ClipPath id="clip0_3001_4036">
        <Rect width={16} height={16} fill="white" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_3001_4036)">
      <Path
        d="M2.76343 2.23677C4.75074 1.01775 6.53356 1.50358 7.61059 2.31241C7.78777 2.44547 7.90937 2.53653 7.9999 2.59803C8.09043 2.53653 8.21204 2.44547 8.38922 2.31241C9.46624 1.50358 11.2491 1.01775 13.2364 2.23677C14.6105 3.07968 15.3838 4.8404 15.1124 6.86341C14.8398 8.89618 13.5241 11.1953 10.7377 13.2577C9.77009 13.9743 9.05995 14.5002 7.9999 14.5002C6.93986 14.5002 6.22971 13.9743 5.26213 13.2577C2.47572 11.1953 1.16 8.89618 0.887368 6.86341C0.616045 4.8404 1.38927 3.07968 2.76343 2.23677Z"
        stroke={color}
        strokeLinecap="round"
      />
    </G>
  </Svg>
);

export default Like;
