import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from "react-native-svg";

const Facebook = ({
  width = 24,
  height = 24,
  color = "#121212",
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
    <Defs>
      <ClipPath id="clip0_570_16301">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_570_16301)">
      <Path
        d="M23.5 12.0699C23.5 5.7186 18.3513 0.56988 12 0.56988C5.64872 0.56988 0.5 5.7186 0.5 12.0699C0.5 17.8099 4.70538 22.5674 10.2031 23.4302V15.3941H7.2832V12.0699H10.2031V9.53629C10.2031 6.6541 11.92 5.06207 14.5468 5.06207C15.805 5.06207 17.1211 5.28668 17.1211 5.28668V8.11675H15.671C14.2424 8.11675 13.7969 9.00322 13.7969 9.91266V12.0699H16.9863L16.4765 15.3941H13.7969V23.4302C19.2946 22.5674 23.5 17.8099 23.5 12.0699Z"
        fill={color}
      />
    </G>
  </Svg>
);

Facebook.displayName = 'Facebook';

export default Facebook;
