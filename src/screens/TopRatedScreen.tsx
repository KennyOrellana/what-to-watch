import React from "react";

import ScreenType from "../constants/ScreenType";
import BaseScreen from "./BaseScreen";

export default function TopRatedScreen() {
  return <BaseScreen screenType={ScreenType.TOP_RATED} />;
}
