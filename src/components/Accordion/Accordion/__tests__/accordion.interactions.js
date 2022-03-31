import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import { delay, interactionSuite, resetFocus } from "../../../../__tests__/interactions-helper";

const CHANGES_DELAY = 1;

function getAccordionHeadingBtText(canvas, title) {
  return canvas.getByText(title)?.closest("button");
}

function getOpenedAccordionItem(canvas) {
  const elPanel = canvas.getByRole("region");
  const elHeading = within(elPanel.parentNode).getByRole("button");
  return { elPanel, elHeading };
}

const openCloseAccordionSingleActiveTests = async canvas => {
  let elHeading, elPanel, before, after;
  await delay(CHANGES_DELAY);

  // try to click on already selected Accordion Item heading
  before = getOpenedAccordionItem(canvas);
  userEvent.click(before.elHeading);
  after = getOpenedAccordionItem(canvas);
  // what was opened should be still opened
  await expect(before.elPanel.id).toBe(after.elPanel.id);
  // panel and heading aria controls are the same
  await expect(after.elHeading.getAttribute("aria-controls")).toBe(after.elPanel.id);

  // select first (0) AccordionItem
  before = getOpenedAccordionItem(canvas);
  elHeading = getAccordionHeadingBtText(canvas, "Notifications");
  userEvent.click(elHeading);
  elPanel = canvas.getByRole("region");
  await expect(elHeading.getAttribute("aria-expanded")).toBe("true");
  await expect(before.elHeading.getAttribute("aria-expanded")).toBe("false");
  await expect(elHeading.getAttribute("aria-controls")).toBe(elPanel.id);
  await delay(CHANGES_DELAY);

  // select back second (1) AccordionItem
  before = getOpenedAccordionItem(canvas);
  elHeading = getAccordionHeadingBtText(canvas, "Setting");
  userEvent.click(elHeading);
  elPanel = canvas.getByRole("region");
  await expect(elHeading.getAttribute("aria-expanded")).toBe("true");
  await expect(before.elHeading.getAttribute("aria-expanded")).toBe("false");
  await expect(elHeading.getAttribute("aria-controls")).toBe(elPanel.id);
};

export const accordionSingleActivePlaySuite = interactionSuite({
  tests: [openCloseAccordionSingleActiveTests],
  afterEach: async () => {
    await resetFocus();
  }
});
