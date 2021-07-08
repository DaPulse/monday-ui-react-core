import React from "react";
import { text } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import HiddenText from "../HiddenText";

export const Sandbox = () => (
  <div>
    <HiddenText id="exampleHiddenText" text={text("Text", "Test knob value")} />
  </div>
);

export default {
  title: "A11y|HiddenText",
  component: HiddenText,
  decorators: [withPerformance]
};
