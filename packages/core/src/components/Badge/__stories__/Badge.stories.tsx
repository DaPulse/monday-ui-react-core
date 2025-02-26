import React from "react";
import Badge from "../Badge";
import person from "./assets/person.png";
import { ExternalPage, WhatsNew } from "@vibe/icons";
import Link from "../../Link/Link";
import Button from "../../Button/Button";
import Flex from "../../Flex/Flex";
import Avatar from "../../Avatar/Avatar";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { createComponentTemplate, StoryDescription } from "vibe-storybook-components";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Badge,
  ignoreControlsPropNamesArray: ["children"]
});

const badgeTemplate = createComponentTemplate(Badge);

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: badgeTemplate.bind({}),
  name: "Overview",

  args: {
    children: <Button leftIcon={WhatsNew}>{"What's new"}</Button>
  }
};

export const States = {
  render: () => (
    <Flex
      gap="large"
      style={{
        flex: 1
      }}
      justify="start"
      align="start"
    >
      <StoryDescription description="Indicator" vertical align={StoryDescription.align.START}>
        <Badge>
          <Button leftIcon={WhatsNew}>{"What's new"}</Button>
        </Badge>
      </StoryDescription>
      <StoryDescription description="Counter" vertical align={StoryDescription.align.START}>
        <Badge type="counter" count={100} maxDigits={2}>
          <Button leftIcon={WhatsNew}>{"What's new"}</Button>
        </Badge>
      </StoryDescription>
    </Flex>
  ),

  name: "States"
};

export const ButtonStory = {
  render: () => (
    <Badge alignment="rectangular">
      <Button leftIcon={ExternalPage}>Button</Button>
    </Badge>
  ),

  name: "Button"
};

export const AvatarStory = {
  render: () => (
    <Badge alignment="circular">
      <Avatar size="large" src={person} type="img" />
    </Badge>
  ),

  name: "Avatar"
};

export const InlineElements = {
  render: () => (
    <Flex direction="column" gap="medium" align="start">
      <Badge alignment="outside">
        <Link text="Read more" />
      </Badge>
      <Badge alignment="outside">
        <Link text="What's new" iconPosition="start" icon={WhatsNew} />
      </Badge>
      <Badge alignment="outside">
        <Link text="Learn more" iconPosition="end" icon={ExternalPage} />
      </Badge>
    </Flex>
  ),

  name: "Inline elements"
};
