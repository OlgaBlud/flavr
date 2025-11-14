import * as React from "react";
import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from "react-native-svg";

const Navigation = ({
  width = 16,
  height = 16,
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
    <Defs>
      <LinearGradient
        id="paint0_linear_3001_2846"
        x1={5.83904}
        y1={1.33105}
        x2={5.83904}
        y2={14.6686}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9500" />
        <Stop offset={1} stopColor="#F45905" />
      </LinearGradient>
    </Defs>
    <Path
      d="M1.80705 11.3465L2.96705 9.02649C3.28705 8.37982 3.28705 7.62649 2.96705 6.97982L1.80705 4.65315C0.813714 2.66649 2.95371 0.566486 4.92038 1.60649L5.94705 2.15315C6.09371 2.22649 6.20705 2.34649 6.26705 2.49315L10.0604 10.9265C10.2137 11.2732 10.0737 11.6798 9.74038 11.8532L4.91371 14.3932C2.95371 15.4332 0.813714 13.3332 1.80705 11.3465Z"
      fill="url(#paint0_linear_3001_2846)"
    />
    <Path
      d="M10.8738 10.3998L8.38714 4.87981C8.10714 4.25981 8.77381 3.63314 9.37381 3.95314L13.2205 5.97981C14.8538 6.83981 14.8538 9.17314 13.2205 10.0331L11.8605 10.7465C11.4938 10.9331 11.0471 10.7798 10.8738 10.3998Z"
      fill="#FBBB94"
    />
  </Svg>
);

export default Navigation;
