import React from "react";
import Svg, { Path } from "react-native-svg";

interface HeartProps {
  width?: number;
  height?: number;
  color?: string;
}

const Heart: React.FC<HeartProps> = ({ 
  width = 19, 
  height = 18, 
  color = "#C8C8C8" 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
      <Path 
        d="M2.55837 1.02013C5.19282 -0.667721 7.55617 0.00495763 8.98391 1.12485C9.21879 1.30909 9.37999 1.43518 9.5 1.52032C9.62 1.43518 9.78121 1.30909 10.0161 1.12485C11.4438 0.00495763 13.8072 -0.667721 16.4416 1.02013C18.2633 2.18721 19.2883 4.6251 18.9286 7.42614C18.5672 10.2407 16.823 13.424 13.1293 16.2796C11.8466 17.2718 10.9052 18 9.5 18C8.09478 18 7.15339 17.2718 5.87072 16.2796C2.17698 13.424 0.432823 10.2407 0.0714143 7.42614C-0.288259 4.6251 0.736745 2.18721 2.55837 1.02013Z" 
        fill={color}
      />
    </Svg>
  );
};

Heart.displayName = 'Heart';

export default Heart;
