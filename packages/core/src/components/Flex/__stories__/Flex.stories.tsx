import React from "react";
import Flex, { FlexProps } from "../Flex";
import { Add, Filter, Person, Search, Sort } from "../../Icon/Icons";
import Button from "../../Button/Button";
import Chips from "../../Chips/Chips";
import { StoryDescription } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import styles from "./Flex.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Flex,
  actionPropsArray: ["onClick"]
});

const flexTemplate = (args: FlexProps) => {
  return (
    <Flex {...args}>
      <Button>Primary</Button>
      <Button kind="tertiary">Tertiary</Button>
      <Button kind="tertiary">Tertiary</Button>
    </Flex>
  );
};

export default {
  title: "Layout/Flex",
  component: Flex,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: flexTemplate.bind({}),
  name: "Overview",
  args: {}
};

export const Directions = {
  render: () => (
    <div className={styles["story-container"]}>
      <StoryDescription description="Horizontal">
        <Flex>
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Vertical">
        <Flex direction="column">
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
    </div>
  ),

  name: "Directions"
};

export const HorizontalSpacingBetweenItems = {
  render: () => (
    <div className={styles["story-container"]}>
      <StoryDescription description="No spacing between items">
        <Flex>
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Extra small spacing between items">
        <Flex gap="xs">
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Small spacing between items">
        <Flex gap="small">
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Medium spacing between items">
        <Flex gap="medium">
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Large spacing between items">
        <Flex gap="large">
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Custom spacing between items">
        <Flex gap={32}>
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
    </div>
  ),

  name: "Horizontal spacing between items"
};

export const VerticalSpacingBetweenItems = {
  render: () => (
    <Flex
      style={{
        width: "100%"
      }}
      justify="space-around"
    >
      <StoryDescription description="No spacing between items" vertical>
        <Flex direction="column">
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Extra small spacing between items" vertical>
        <Flex gap="xs" direction="column">
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Small spacing between items" vertical>
        <Flex gap="small" direction="column">
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Medium spacing between items" vertical>
        <Flex gap="medium" direction="column">
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Large spacing between items" vertical>
        <Flex gap="large" direction="column">
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Custom spacing between items" vertical>
        <Flex gap={32} direction="column">
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
    </Flex>
  ),

  name: "Vertical spacing between items"
};

export const HorizontalPositions = {
  render: () => (
    <div
      className={styles["story-container"]}
      style={{
        width: "100%"
      }}
    >
      <StoryDescription description="Start position">
        <Flex
          justify="start"
          style={{
            width: "100%"
          }}
        >
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Center position">
        <Flex
          justify="center"
          style={{
            width: "100%"
          }}
        >
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="End position">
        <Flex
          justify="end"
          style={{
            width: "100%"
          }}
        >
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Space between position">
        <Flex
          justify="space-between"
          style={{
            width: "100%"
          }}
        >
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Space around position">
        <Flex
          justify="space-around"
          style={{
            width: "100%"
          }}
        >
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
    </div>
  ),

  name: "Horizontal positions"
};

export const VerticalPositions = {
  render: () => (
    <Flex
      style={{
        width: "100%"
      }}
      justify="space-around"
    >
      <StoryDescription description="Start position" vertical>
        <Flex
          justify="start"
          style={{
            height: "300px"
          }}
          direction="column"
        >
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Center position" vertical>
        <Flex
          justify="center"
          style={{
            height: "300px"
          }}
          direction="column"
        >
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="End position" vertical>
        <Flex
          justify="end"
          style={{
            height: "300px"
          }}
          direction="column"
        >
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Space between position" vertical>
        <Flex
          justify="space-between"
          style={{
            height: "300px"
          }}
          direction="column"
        >
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
      <StoryDescription description="Space around position" vertical>
        <Flex
          justify="space-around"
          style={{
            height: "300px"
          }}
          direction="column"
        >
          <Button>Primary</Button>
          <Button kind="tertiary">Tertiary</Button>
          <Button kind="tertiary">Tertiary</Button>
        </Flex>
      </StoryDescription>
    </Flex>
  ),

  name: "Vertical positions"
};

export const SupportMultiLinesLayout = {
  render: () => (
    <Flex
      wrap
      style={{
        width: "300px"
      }}
      gap="small"
    >
      <Chips className={styles["flex-chip"]} label="Chip 1" />
      <Chips className={styles["flex-chip"]} label="Chip 2" />
      <Chips className={styles["flex-chip"]} label="Chip 3" />
      <Chips className={styles["flex-chip"]} label="Chip 4" />
      <Chips className={styles["flex-chip"]} label="Chip 5" />
      <Chips className={styles["flex-chip"]} label="Chip 6" />
      <Chips className={styles["flex-chip"]} label="Chip 7" />
    </Flex>
  ),

  name: "Support multi lines layout"
};

export const FlexAsToolbarContainer = {
  render: () => (
    <Flex gap="small">
      <Button leftIcon={Add}>Add</Button>
      <Button kind="tertiary" leftIcon={Search}>
        Search
      </Button>
      <Button kind="tertiary" leftIcon={Person}>
        Person
      </Button>
      <Button kind="tertiary" leftIcon={Filter}>
        Filter
      </Button>
      <Button kind="tertiary" leftIcon={Sort}>
        Sort
      </Button>
    </Flex>
  ),

  name: "Flex as toolbar container"
};
