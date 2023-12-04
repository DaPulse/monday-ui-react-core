import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipClickable = () => (
  <Tip title="Check out our component solution for this use case">
    For more simple use cases, you also can use our{" "}
    <StorybookLink size="small" href="Accessibility/Clickable">
      Clickable
    </StorybookLink>{" "}
    component wrapper.
  </Tip>
);
