import { Link, Tip } from "vibe-storybook-components";

export const modifiers = [
  {
    name: "preventOverflow",
    options: {
      mainAxis: false
    }
  },
  {
    name: "flip",
    options: {
      fallbackPlacements: []
    }
  }
];

export const TipOtherComponents = () => (
  <Tip>
    As tooltips only surface from a hover, never include links or buttons in the copy. If your tooltip requires either
    of these, considers putting your content in a
    <Link href="/?path=/docs/popover-tipseen--overview" size={Link.sizes.SMALL} withoutSpacing>
      Tipseen
    </Link>
    or
    <Link href="/?path=/docs/feedback-attentionbox--overview" size={Link.sizes.SMALL}>
      Attention box.
    </Link>
  </Tip>
);
