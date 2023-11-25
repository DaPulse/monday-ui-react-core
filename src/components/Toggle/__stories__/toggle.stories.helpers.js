import { Link, Tip } from "vibe-storybook-components";

export const TipOtherComponents = () => (
  <Tip>
    If the user needs to choose an item from a set of options, use
    <Link href="/?path=/docs/inputs-radiobutton--overview" size={Link.sizes.SMALL}>
      Radio button
    </Link>
    or
    <Link href="/?path=/docs/inputs-checkbox--overview" size={Link.sizes.SMALL}>
      Checkboxes
    </Link>
    instead.
  </Tip>
);
