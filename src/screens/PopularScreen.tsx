import React from "react";

import ScreenType from "../constants/ScreenType";
import BaseScreen from "./BaseScreen";

export default function PopularScreen() {
  return <BaseScreen screenType={ScreenType.POPULAR} />;
}
