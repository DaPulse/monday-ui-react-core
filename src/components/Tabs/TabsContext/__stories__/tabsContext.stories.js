import React from "react";
import { action } from '@storybook/addon-actions';
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import TabsContext from "../TabsContext";
import { StoryStateRow, StoryStateColumn, ComponentStateDescription, FlexLayout, Divider } from "../../../storybook-helpers";
import DarkThemeContainer from "../../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import TabList from "../../TabList/TabList";
import Tab from "../../Tab/Tab";
import TabPanel from "../../TabPanel/TabPanel";


export const Sandbox = () => (
    <div>
      <TabsContext>
        <TabList id="Knobs">
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
        </TabList>

        <TabPanel>First panel</TabPanel>
        <TabPanel>Second panel</TabPanel>
        <TabPanel>Third panel</TabPanel>
      </TabsContext>
    </div>
);

export default {
    title: "Components/Tabs/TabsContext",
    component: TabsContext,
    decorators: [withPerformance]

};
