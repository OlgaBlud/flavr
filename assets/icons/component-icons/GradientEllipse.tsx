import * as React from "react";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from "react-native-svg";
const GradientEllipse = ({
  width = 58,
  height = 58,
  color = "currentColor",
  ...props
}: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 58 58"
      fill="none"
      {...props}
    >
      <Circle
        cx={29}
        cy={29}
        r={28.4}
        stroke="url(#paint0_linear_778_37231)"
        strokeWidth={1.2}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_778_37231"
          x1={29}
          y1={0}
          x2={29}
          y2={58}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF9500" />
          <Stop offset={1} stopColor="#F45905" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default GradientEllipse;
