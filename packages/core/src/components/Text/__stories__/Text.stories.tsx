import React from "react";
import cx from "classnames";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import Text from "../Text";
import { createComponentTemplate, StorybookLink } from "vibe-storybook-components";
import Flex from "../../Flex/Flex";
import { ONE_LINE_ELLIPSIS_TEST_ID, OVERFLOW_TEXT_CONTAINER_ID } from "../__tests__/textTestsConstants";
import { textOverflowSuite } from "../__tests__/Text.interactions";
import styles from "./Text.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Text,
  enumPropNamesArray: ["types", "weights", "colors", { propName: "align", enumName: "align" }], // List enum props here
  iconPropNamesArray: [], // List props that are typed as icons here
  actionPropsArray: [] // List the component's actions here
});

export default {
  title: "Text/Text",
  component: Text,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const textTemplate = createComponentTemplate(Text);

export const Overview = {
  render: textTemplate.bind({}),
  name: "Overview",

  args: {
    children: "Hi, I'm a text!"
  }
};

export const SizesAndWeights = {
  render: () => (
    <Flex
      gap={Flex.gaps.LARGE}
      direction={Flex.directions.COLUMN}
      justify={Flex.justify.START}
      align={Flex.align.START}
    >
      <Flex
        gap={Flex.gaps.SMALL}
        direction={Flex.directions.COLUMN}
        justify={Flex.justify.START}
        align={Flex.align.START}
      >
        <Text type="text1" weight="bold">
          This is text1 bold
        </Text>
        <Text type="text1" weight="medium">
          This is text1 medium
        </Text>
        <Text type="text1" weight="normal">
          This is text1 normal
        </Text>
      </Flex>
      <Flex
        gap={Flex.gaps.SMALL}
        direction={Flex.directions.COLUMN}
        justify={Flex.justify.START}
        align={Flex.align.START}
      >
        <Text type="text2" weight="bold">
          This is text2 bold
        </Text>
        <Text type="text2" weight="medium">
          This is text2 medium
        </Text>
        <Text type="text2" weight="normal">
          This is text2 normal
        </Text>
      </Flex>
      <Flex
        gap={Flex.gaps.SMALL}
        direction={Flex.directions.COLUMN}
        justify={Flex.justify.START}
        align={Flex.align.START}
      >
        <Text type="text3" weight="medium">
          This is text3 medium
        </Text>
        <Text type="text3" weight="normal">
          This is text3 normal
        </Text>
      </Flex>
    </Flex>
  ),

  name: "Sizes and weights"
};

export const Colors = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.SMALL}>
      <Text color="primary">Primary text</Text>
      <Text color="secondary">Secondary text</Text>
      <Text className={cx(styles.primaryBackground, styles.smallRectangle)} align="center" color="onPrimary">
        On primary text
      </Text>
      <Text className={cx(styles.invertedBackground, styles.smallRectangle)} align="center" color="onInverted">
        On inverted text
      </Text>
      <Text
        element="div"
        className={cx(styles.smallRectangle)}
        style={{
          backgroundColor: "black"
        }}
        align="center"
        color="fixedLight"
      >
        Fixed light
      </Text>
      <Text
        element="div"
        className={cx(styles.smallRectangle)}
        style={{
          backgroundColor: "whitesmoke"
        }}
        align="center"
        color="fixedDark"
      >
        Fixed dark
      </Text>
    </Flex>
  ),

  name: "Colors"
};

export const Overflow = {
  render: () => (
    <Flex
      direction={Flex.directions.COLUMN}
      id={OVERFLOW_TEXT_CONTAINER_ID}
      justify={Flex.justify.START}
      align={Flex.align.INITIAL}
      gap={Flex.gaps.SMALL}
      style={{ width: "480px" }}
    >
      <Text
        data-testid={ONE_LINE_ELLIPSIS_TEST_ID}
        /**for testing purposes**/
        tooltipProps={{
          containerSelector: `#${OVERFLOW_TEXT_CONTAINER_ID}`
        }}
      >
        This is an example of text with overflow and a Tooltip to help or provide information about specific components
        when a user hovers over them.
      </Text>
      <Text maxLines={2}>
        This is an example of text with ellipsis which displayed after two full lines of content this is an example of
        text with ellipsis which displayed after two full lines of content
      </Text>
    </Flex>
  ),

  name: "Overflow",
  play: textOverflowSuite
};

export const Paragraph = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN}>
      <Text element="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
      <Text element="p" ellipsis maxLines={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
    </Flex>
  ),

  name: "Paragraph"
};

export const LinksInsideRunningText = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.SMALL}>
      <Text align="center">
        This is the story of a{" "}
        <StorybookLink page="Foundations/Typography" size={StorybookLink.sizes.SMALL}>
          link
        </StorybookLink>{" "}
        inside running text.
      </Text>
      <Text className={cx(styles.primaryBackground, styles.mediumRectangle)} align="center" color="onPrimary">
        This is the story of a{" "}
        <StorybookLink page="Foundations/Typography" size={StorybookLink.sizes.SMALL}>
          link
        </StorybookLink>{" "}
        inside running text on a primary color
      </Text>
      <Text className={cx(styles.invertedBackground, styles.mediumRectangle)} align="center" color="onInverted">
        This is the story of a{" "}
        <StorybookLink page="Foundations/Typography" size={StorybookLink.sizes.SMALL}>
          link
        </StorybookLink>{" "}
        inside running text on an inverted color
      </Text>
      <Text
        element="div"
        ellipsis={false}
        className={cx(styles.mediumRectangle)}
        style={{
          backgroundColor: "black"
        }}
        align="center"
        color="fixedLight"
      >
        This is the story of a{" "}
        <StorybookLink page="Foundations/Typography" size={StorybookLink.sizes.SMALL}>
          link
        </StorybookLink>{" "}
        inside running text with fixed light color
      </Text>
      <Text
        element="div"
        ellipsis={false}
        className={cx(styles.mediumRectangle)}
        style={{
          backgroundColor: "whitesmoke"
        }}
        align="center"
        color="fixedDark"
      >
        This is the story of a{" "}
        <StorybookLink page="Foundations/Typography" size={StorybookLink.sizes.SMALL}>
          link
        </StorybookLink>{" "}
        inside running text with fixed dark color
      </Text>
    </Flex>
  ),

  name: "Links inside running text"
};
