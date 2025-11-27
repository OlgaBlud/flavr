// import * as React from "react";
// import Svg, { Path, SvgProps } from "react-native-svg";
// const Microphone = ({
//   width = 16,
//   height = 16,
//   color = "currentColor",
//   ...props
// }: SvgProps) => (
//   <Svg width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
//     <Path
//       d="M8 12.6666C10.2067 12.6666 12 10.8733 12 8.66659V5.33325C12 3.12659 10.2067 1.33325 8 1.33325C5.79333 1.33325 4 3.12659 4 5.33325V8.66659C4 10.8733 5.79333 12.6666 8 12.6666Z"
//       stroke={color}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <Path
//       d="M2 7.33325V8.66659C2 11.9799 4.68667 14.6666 8 14.6666C11.3133 14.6666 14 11.9799 14 8.66659V7.33325"
//       stroke={color}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <Path
//       d="M6.07324 4.98662C7.25991 4.55329 8.55324 4.55329 9.73991 4.98662"
//       stroke={color}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <Path
//       d="M6.68652 6.98678C7.48652 6.76678 8.33319 6.76678 9.13319 6.98678"
//       stroke={color}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </Svg>
// );
// export default Microphone;

import * as React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
  SvgProps,
} from "react-native-svg";
const Microphone = ({
  width = 31,
  height = 31,
  color = "currentColor",
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 31 31" fill="none" {...props}>
    <Rect
      width={31}
      height={31}
      rx={15.5}
      fill="url(#paint0_linear_1157_2040)"
    />
    <Rect x={3} y={3} width={25} height={25} rx={12.5} fill="white" />
    <Path
      d="M15.5 19.6666C17.7067 19.6666 19.5 17.8733 19.5 15.6666V12.3333C19.5 10.1266 17.7067 8.33325 15.5 8.33325C13.2933 8.33325 11.5 10.1266 11.5 12.3333V15.6666C11.5 17.8733 13.2933 19.6666 15.5 19.6666Z"
      stroke="#F45A06"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.5 14.3333V15.6666C9.5 18.9799 12.1867 21.6666 15.5 21.6666C18.8133 21.6666 21.5 18.9799 21.5 15.6666V14.3333"
      stroke="#F45A06"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.5732 11.9866C14.7599 11.5533 16.0532 11.5533 17.2399 11.9866"
      stroke="#F45A06"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1865 13.9868C14.9865 13.7668 15.8332 13.7668 16.6332 13.9868"
      stroke="#F45A06"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1157_2040"
        x1={15.5}
        y1={0}
        x2={15.5}
        y2={31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9500" />
        <Stop offset={1} stopColor="#F45905" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Microphone;
