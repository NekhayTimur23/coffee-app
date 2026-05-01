import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowLeftIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.5 19l-7-7 7-7"
        stroke="#2F2D2C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowLeftIcon;
