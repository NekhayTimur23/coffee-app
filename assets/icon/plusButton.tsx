import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlusButtom() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M4 8h8M8 12V4"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PlusButtom;
