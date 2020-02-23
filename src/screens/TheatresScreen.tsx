import React from "react";

import ScreenType from "../constants/ScreenType";
import BaseScreen from "./BaseScreen";

export default function TheatresScreen() {
  return <BaseScreen screenType={ScreenType.THEATRES} />;
}
