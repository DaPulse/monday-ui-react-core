import React from "react";
import { ComponentDefaultTestId } from "../tests/constants";
type VibeComponent<T, P = HTMLElement> = React.ForwardRefExoticComponent<T & React.RefAttributes<P>> & {
  defaultTestId?: ComponentDefaultTestId;
};

export default VibeComponent;
