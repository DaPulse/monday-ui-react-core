import React from "react";
import { withPerformance } from "storybook-addon-performance";
import ButtonGroup from "../ButtonGroup";
import {StoryStateColumn, StoryStateRow} from "../../storybook-helpers";
import {FakeXMLHttpRequest} from "sinon";

export const Sandbox = () => (
  <div
    style={{
      width: "380px",
      height: "400px",
      border: "1px solid",
      padding: "30px"
    }}
  >
    <div style={{ textAlign: "left" }}>Medium Size</div>
    <br />
    <ButtonGroup
      componentClassName="buttons-group"
      name="test1"
      groupAriaLabel="My first button group"
      onSelect={value => console.log("Selected: ", value)}
      size={ButtonGroup.sizes.MEDIUM}
      options={[
        { value: 1, text: "Option 1", icon: "fa fa-star" },
        { value: 2, text: "Option 2" },
        { value: 3, text: "Option 3", leftIcon: "fa fa-star" }
      ]}
    />
    <br />
    <ButtonGroup
      componentClassName="buttons-group-tertiary"
      name="test2"
      groupAriaLabel="My second button group"
      onSelect={value => console.log("Selected: ", value)}
      size={ButtonGroup.sizes.MEDIUM}
      kind={ButtonGroup.kinds.TERTIARY}
      options={[
        { value: 1, text: "Option 1", icon: "fa fa-star" },
        { value: 2, text: "Option 2", subText: "This is a subtext", ariaLabel: "Aria Label" },
        { value: 3, text: "Option 3", leftIcon: "fa fa-star" }
      ]}
    />
    <br />
    <div style={{ textAlign: "left" }}>Medium Size Disabled</div>
    <br />
    <ButtonGroup
      componentClassName="buttons-group"
      name="test1"
      groupAriaLabel="My third button group"
      onSelect={value => console.log("Selected: ", value)}
      size={ButtonGroup.sizes.MEDIUM}
      disabled
      options={[
        { value: 1, text: "Option 1", icon: "fa fa-star" },
        { value: 2, text: "Option 2" },
        { value: 3, text: "Option 3", leftIcon: "fa fa-star" }
      ]}
    />
    <br />
    <div style={{ textAlign: "left" }}>Small Size</div>
    <br />
    <ButtonGroup
      componentClassName="buttons-group"
      name="test2"
      groupAriaLabel="My fourth button group"
      onSelect={value => console.log("Selected: ", value)}
      size={ButtonGroup.sizes.SMALL}
      options={[
        { value: 1, text: "Option 1", icon: "fa fa-star" },
        { value: 2, text: "Option 2" },
        { value: 3, text: "Option 3", leftIcon: "fa fa-star" }
      ]}
    />
    <br />
  </div>
);

export const ButtonGroupWithTooltip = () => (
    <>
        <StoryStateRow>
            <StoryStateColumn title="Tooltip with bottom position" />
        </StoryStateRow>
        <StoryStateRow>
            <ButtonGroup
                componentClassName="buttons-group"
                name="test1"
                groupAriaLabel="My second button group"
                size={ButtonGroup.sizes.SMALL}
                tooltipPosition="bottom"
                tooltipContainerSelector="body"
                options={[
                    { value: 1, text: "With tooltip", tooltipContent: "Option 1 tooltip" },
                    { value: 2, text: "Without tooltip"  },
                    { value: 3, text: "With tooltip", tooltipContent: "Option 3 tooltip"}
                ]}
            />
        </StoryStateRow>
        <StoryStateRow>
            <StoryStateColumn title="Tooltip with top position" />
        </StoryStateRow>
        <StoryStateRow>
            <ButtonGroup
                componentClassName="buttons-group"
                name="test1"
                groupAriaLabel="My first button group"
                size={ButtonGroup.sizes.SMALL}
                tooltipContainerSelector="body"
                options={[
                    { value: 1, text: "With tooltip", tooltipContent: "Option 1 tooltip" },
                    { value: 2, text: "Without tooltip"  },
                    { value: 3, text: "With tooltip", tooltipContent: "Option 3 tooltip"}
                ]}
            />
        </StoryStateRow>
    </>
);

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  decorators: [withPerformance]
};