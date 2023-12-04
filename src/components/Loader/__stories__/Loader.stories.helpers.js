import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipSkeleton = () => (
  <Tip>
    While loading content consider using{" "}
    <StorybookLink page="Feedback/Skeleton" size="small">
      Skeleton loading
    </StorybookLink>
  </Tip>
);
