import { Page, Locator, test } from "@playwright/test";
import { pressKey } from "../utils/common-actions";
import { BaseElement } from "./BaseElement";

/**
 * Class representing a TextField element.
 * Extends the BaseElement class.
 */
export class TextField extends BaseElement {
  override page: Page;
  override locator: Locator;
  override elementReportName: string;
  /**
   * Create a TextField.
   * @param {Page} page - The Playwright page object.
   * @param {Locator} locator - The locator for the TextField element.
   * @param {string} elementReportName - The name for reporting purposes.
   */
  constructor(page: Page, locator: Locator, elementReportName: string) {
    super(page, locator, elementReportName);
    this.page = page;
    this.locator = locator;
    this.elementReportName = elementReportName;
  }

  /**
   * Set specified text in input element.
   * @param {string} text - Text to be filled in the input.
   * @returns {Promise<void>}
   */
  async setText(text: string): Promise<void> {
    await test.step(`Set text: ${text} in element: ${this.elementReportName}`, async () => {
      const tagName = await this.locator.evaluate(el => el.tagName);
      if (tagName !== "input") {
        throw new Error(
          `Element is not an input element. Element: ${this.elementReportName}. Element must be of type input.`
        );
      } else {
        if (!(await this.isEmpty())) {
          await this.clearText();
        }
        await this.locator.fill(text);
      }
    });
  }

  /**
   * Clear the text in the input element.
   */
  async clearText(): Promise<void> {
    await test.step(`Clear text in element: ${this.elementReportName}`, async () => {
      await this.locator.fill("");
    });
  }

  /**
   * Get the value of the input element.
   * @returns {Promise<string>}
   */
  async isEmpty(): Promise<boolean> {
    return (await this.locator.inputValue()) === "";
  }

  /**
   * Exit the edit mode by pressing the Escape key.
   * @returns {Promise<void>}
   */
  async exitEditMode(): Promise<void> {
    await pressKey(this.page, "Escape");
  }
}
