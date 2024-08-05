import React from "react";
import LinearProgressBar, { LinearProgressBarProps } from "../LinearProgressBar";
import { useMemo } from "react";
import { createStoryMetaSettingsDecorator } from "../../../../storybook/functions/createStoryMetaSettingsDecorator";
import colors from "../../../../constants/colors.json";
import { Info } from "../../../Icon/Icons";
import Icon from "../../../Icon/Icon";
import BreadcrumbItem from "../../../BreadcrumbsBar/BreadcrumbItem/BreadcrumbItem";
import BreadcrumbsBar from "../../../BreadcrumbsBar/BreadcrumbsBar";
import "./LinearProgressBar.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: LinearProgressBar,
  enumPropNamesArray: ["size", "barStyle"]
});

export default {
  title: "Feedback/LinearProgressBar",
  component: LinearProgressBar,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const lineProgressBarTemplate = (args: LinearProgressBarProps) => {
  return <LinearProgressBar className="linear-progress-bar_small-wrapper" {...args} />;
};

export const Overview = {
  render: lineProgressBarTemplate.bind({}),
  name: "Overview",

  args: {
    value: 20,
    size: "large"
  }
};

export const Regular = {
  render: () => (
    <div className="linear-progress-bar_column">
      <div className="linear-progress-bar_block">
        <LinearProgressBar className="linear-progress-bar_small-wrapper" indicateProgress value={30} size="large" />
        With label
      </div>
      <div className="linear-progress-bar_block">
        <LinearProgressBar className="linear-progress-bar_small-wrapper" value={30} size="large" />
        Without label
      </div>
    </div>
  ),

  name: "Regular"
};

export const WithSecondaryValue = {
  render: () => (
    <LinearProgressBar
      className="linear-progress-bar_small-wrapper"
      value={50}
      indicateProgress
      valueSecondary={65}
      size="large"
    />
  ),

  name: "With secondary value"
};

export const MultiProgressBar = {
  render: () => {
    const multiValues = useMemo(
      () => [
        {
          value: 25,
          color: "var(--primary-color)"
        },
        {
          value: 75,
          color: "var(--warning-color)"
        },
        {
          value: 100,
          color: "var(--positive-color)"
        }
      ],
      []
    );

    return (
      <LinearProgressBar
        className="linear-progress-bar_big-wrapper"
        value={25}
        size="large"
        indicateProgress
        multi
        multiValues={multiValues}
      />
    );
  },

  name: "Multi progress bar"
};

export const ProgressBarAsACounter = {
  render: () => (
    <div className="linear-progress-bar_box">
      <h4>Loading files</h4>
      <div className="linear-progress-bar_inline-wrapper">
        <div className="linear-progress-bar_icon-wrapper">
          Items
          <Icon icon={Info} />
        </div>
        <span>142/200</span>
      </div>
      <LinearProgressBar value={71} size="large" barStyle="positive" />
    </div>
  ),

  name: "Progress bar as a counter"
};

export const ProgressBarAsLoadingIndicator = {
  render: () => (
    <div className="linear-progress-bar_box-wrapper">
      <div className="linear-progress-bar_row">
        <div className="linear-progress-bar_img" />
        <div className="linear-progress-bar_aside">
          <b>Frame 697.pg</b>
          <BreadcrumbsBar type="indication" className="linear-progress-bar_breadcrumbs">
            <BreadcrumbItem text="Hadas Test" />
            <BreadcrumbItem text="Activity 6" />
          </BreadcrumbsBar>
          <div className="linear-progress-bar_inline-wrapper">
            <span>2KB</span>
            <span>Saving...</span>
          </div>
        </div>
      </div>
      <LinearProgressBar value={71} />
    </div>
  ),

  name: "Progress bar as loading indicator"
};
