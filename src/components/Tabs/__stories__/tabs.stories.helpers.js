import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipButtonGroup = () => (
  <Tip>
    Use tabs to navigate between different contents, if switching between states within the same content use{" "}
    <StorybookLink page="Buttons/ButtonGroup" size="small">
      Button group
    </StorybookLink>{" "}
    instead
  </Tip>
);
