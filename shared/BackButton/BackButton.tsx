import * as React from "react";
import { Pressable } from "react-native";
import ArrowLeftIcon from "../../assets/icon/arrowLeftIcon";
import { router } from "expo-router";

function BackButton() {
  return (
    <Pressable style={{paddingHorizontal: 20}} onPressIn={() => router.back()}>
      <ArrowLeftIcon />
    </Pressable>
  );
}

export default BackButton;
