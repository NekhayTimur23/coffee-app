import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MinusIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M4 8h8"
        stroke="#AAADB0"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MinusIcon;
