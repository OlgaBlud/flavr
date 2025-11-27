import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const UpdateProfileIcon = ({
  width = 16,
  height = 16,
  color = "currentColor",
  ...props
}: SvgProps) => (
  <Svg width={width} height={height} fill={color} viewBox="0 0 16 16">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M2.697 1.554A.43.43 0 0 1 3 1.43h5A.714.714 0 1 0 8 0H3a1.857 1.857 0 0 0-1.857 1.857v9.885L.037 15.059a.714.714 0 0 0 .851.92l4.486-1.122h8.769A1.858 1.858 0 0 0 16 13V8a.714.714 0 1 0-1.428 0v5a.428.428 0 0 1-.429.429H5.286a.688.688 0 0 0-.174.021l-3.308.828.731-2.195a.685.685 0 0 0 .037-.226v-10c0-.114.045-.223.125-.303ZM12.258.281a1.714 1.714 0 0 1 1.876.375h.001l1.208 1.21a1.719 1.719 0 0 1 .508 1.216 1.715 1.715 0 0 1-.507 1.216L9.961 9.703a.571.571 0 0 1-.303.159l-3.428.617a.572.572 0 0 1-.665-.655l.571-3.474a.571.571 0 0 1 .16-.313L11.703.655c.159-.16.348-.287.555-.374Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default UpdateProfileIcon;
