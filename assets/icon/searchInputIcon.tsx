import * as React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

function SearchInputIcon(props: ViewProps) {
  return (
    <View {...props}>
      <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
        <Path
          d="M9.583 17.5a7.917 7.917 0 100-15.833 7.917 7.917 0 000 15.833zM18.333 18.333l-1.666-1.666"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export default SearchInputIcon;
