import { useCallback, useState } from "react";
import { StoryDescription } from "vibe-storybook-components";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { person1, person2, person3, person4 } from "./assets";
import AvatarGroup from "../AvatarGroup";
import Avatar from "../../Avatar/Avatar";
import Counter from "../../Counter/Counter";
import Flex from "../../Flex/Flex";
import Slider from "../../Slider/Slider";
import Tooltip from "../../Tooltip/Tooltip";
import Table from "../../Table/Table/Table";
import TableHeader from "../../Table/TableHeader/TableHeader";
import TableHeaderCell from "../../Table/TableHeaderCell/TableHeaderCell";
import TableBody from "../../Table/TableBody/TableBody";
import TableRow from "../../Table/TableRow/TableRow";
import TableCell from "../../Table/TableCell/TableCell";
import styles from "./AvatarGroup.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: AvatarGroup,
  enumPropNamesArray: ["type", "size"] // List enum props here
});

export default {
  title: "Media/Avatar/AvatarGroup",
  component: AvatarGroup,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const avatarGroupTemplate = ({ persons, ...args }) => {
  return (
    <AvatarGroup size={Avatar.sizes.LARGE} max={3} {...args}>
      <Avatar type={Avatar.types.IMG} src={persons.person2} ariaLabel="Sophia Johnson" />
      <Avatar type={Avatar.types.IMG} src={persons.person3} ariaLabel="Marco DiAngelo" />
      <Avatar type={Avatar.types.IMG} src={persons.person4} ariaLabel="Liam Caldwell" />
      <Avatar type={Avatar.types.IMG} src={persons.person1} ariaLabel="Julia Martinez" />
      <Avatar type={Avatar.types.IMG} src={persons.person2} ariaLabel="Sophia Johnson" />
      <Avatar type={Avatar.types.IMG} src={persons.person3} ariaLabel="Marco DiAngelo" />
      <Avatar type={Avatar.types.IMG} src={persons.person4} ariaLabel="Liam Caldwell" />
      <Avatar type={Avatar.types.IMG} src={persons.person1} ariaLabel="Julia Martinez" />
      <Avatar type={Avatar.types.IMG} src={persons.person2} ariaLabel="Sophia Johnson" />
      <Avatar type={Avatar.types.IMG} src={persons.person3} ariaLabel="Marco DiAngelo" />
      <Avatar type={Avatar.types.IMG} src={persons.person4} ariaLabel="Liam Caldwell" />
      <Avatar type={Avatar.types.IMG} src={persons.person1} ariaLabel="Julia Martinez" />
      <Avatar type={Avatar.types.TEXT} text="MR" ariaLabel="Mark Roytstein" />
    </AvatarGroup>
  );
};

export const Overview = {
  render: avatarGroupTemplate.bind(),
  name: "Overview",

  args: {
    persons: {
      person1: window.location.origin + "/" + person1,
      person2: window.location.origin + "/" + person2,
      person3: window.location.origin + "/" + person3,
      person4: window.location.origin + "/" + person4
    }
  }
};

export const Size = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.LARGE} align={Flex.align.START}>
      <StoryDescription description="Large" vertical align={Flex.align.START}>
        <AvatarGroup size={Avatar.sizes.LARGE} type={Avatar.types.IMG} max={4}>
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Medium" vertical align={Flex.align.START}>
        <AvatarGroup size={Avatar.sizes.MEDIUM} type={Avatar.types.IMG} max={4}>
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Small" vertical align={Flex.align.START}>
        <AvatarGroup size={Avatar.sizes.SMALL} type={Avatar.types.IMG} max={4}>
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
    </Flex>
  ),

  name: "Size"
};

export const ColorVariants = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.LARGE} align={Flex.align.START}>
      <StoryDescription description="Light" vertical align={Flex.align.START}>
        <AvatarGroup
          size={Avatar.sizes.LARGE}
          type={Avatar.types.IMG}
          max={4}
          counterProps={{
            color: Counter.colors.LIGHT
          }}
        >
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Dark" vertical align={Flex.align.START}>
        <AvatarGroup
          size={Avatar.sizes.LARGE}
          type={Avatar.types.IMG}
          max={4}
          counterProps={{
            color: Counter.colors.DARK
          }}
        >
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
    </Flex>
  ),

  name: "Color variants"
};

export const MaxAvatarsToDisplay = {
  render: () => {
    const [max, setMax] = useState(4);

    return (
      <Flex
        direction={Flex.directions.COLUMN}
        gap={Flex.gaps.MEDIUM}
        align={Flex.align.START}
        className={styles.sliderCountContainer}
      >
        <Slider
          size={Slider.sizes.SMALL}
          min={1}
          max={14}
          defaultValue={max}
          onChange={value => setMax(value)}
          valueText={`${max}`}
        />
        <AvatarGroup size={Avatar.sizes.LARGE} max={max}>
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
          <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </Flex>
    );
  }
};

export const HoverVsClickable = {
  render: () => {
    const getDummyAvatarsProps = useCallback(numItems => {
      const avatarsProps = [
        {
          type: Avatar.types.IMG,
          src: person1,
          ariaLabel: "Julia Martinez"
        },
        {
          type: Avatar.types.IMG,
          src: person2,
          ariaLabel: "Sophia Johnson"
        },
        {
          type: Avatar.types.IMG,
          src: person3,
          ariaLabel: "Marco DiAngelo"
        },
        {
          type: Avatar.types.IMG,
          src: person4,
          ariaLabel: "Liam Caldwell"
        }
      ];

      let result = [];

      for (let i = 0; i < numItems; i++) {
        result.push(avatarsProps[i % avatarsProps.length]);
      }

      return result;
    }, []);

    return (
      <Flex direction={Flex.directions.ROW} gap={Flex.gaps.LARGE}>
        <StoryDescription description="Counter hover" vertical align={Flex.align.START}>
          <AvatarGroup
            size={Avatar.sizes.LARGE}
            max={4}
            counterTooltipCustomProps={{
              position: Tooltip.positions.BOTTOM
            }}
          >
            {getDummyAvatarsProps(14).map(avatarProps => (
              <Avatar {...avatarProps} />
            ))}
          </AvatarGroup>
        </StoryDescription>
        <StoryDescription description="Counter click" vertical align={Flex.align.START}>
          <Flex>
            <AvatarGroup size={Avatar.sizes.LARGE} max={4}>
              {getDummyAvatarsProps(14).map((avatarProps, index) => (
                <Avatar {...avatarProps} onClick={() => {}} id={index} />
              ))}
            </AvatarGroup>
          </Flex>
        </StoryDescription>
      </Flex>
    );
  },

  name: "Hover vs Clickable"
};
export const Disabled = () => (
  <AvatarGroup size={Avatar.sizes.LARGE} max={4} disabled>
    <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
    <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
    <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
    <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
    <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
    <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
    <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
    <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
    <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
    <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
    <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Marco DiAngelo" />
    <Avatar type={Avatar.types.IMG} src={person4} ariaLabel="Liam Caldwell" />
    <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Julia Martinez" />
    <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sophia Johnson" />
  </AvatarGroup>
);

export const LastSeenUsers = {
  render: () => (
    <Flex direction={Flex.directions.ROW} gap={Flex.gaps.MEDIUM}>
      <div>Last seen</div>
      <AvatarGroup size={Avatar.sizes.MEDIUM} max={4} counterProps={{ color: "dark" }} type={Avatar.types.IMG}>
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
        <Avatar src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar src={person4} ariaLabel="Liam Caldwell" />
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
        <Avatar src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar src={person4} ariaLabel="Liam Caldwell" />
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
        <Avatar src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar src={person4} ariaLabel="Liam Caldwell" />
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
      </AvatarGroup>
    </Flex>
  ),

  name: "Last seen users"
};

export const CustomCounter = {
  render: () => (
    <AvatarGroup
      size={Avatar.sizes.LARGE}
      type={Avatar.types.IMG}
      max={4}
      counterProps={{
        count: 100500,
        color: Counter.colors.DARK,
        prefix: "",
        maxDigits: 5
      }}
    >
      <Avatar src={person1} ariaLabel="Julia Martinez" />
      <Avatar src={person2} ariaLabel="Sophia Johnson" />
      <Avatar src={person3} ariaLabel="Marco DiAngelo" />
      <Avatar src={person4} ariaLabel="Liam Caldwell" />
    </AvatarGroup>
  )
};

export const GridTooltip = {
  render: () => (
    <AvatarGroup size={Avatar.sizes.LARGE} type={Avatar.types.IMG} max={4}>
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
    </AvatarGroup>
  ),

  name: "Grid tooltip"
};

export const CounterCustomTooltipContent = {
  render: () => (
    <AvatarGroup
      size={Avatar.sizes.LARGE}
      type={Avatar.types.IMG}
      max={4}
      counterTooltipCustomProps={{
        content: "... and plenty more employees"
      }}
    >
      <Avatar src={person1} ariaLabel="Julia Martinez" />
      <Avatar src={person2} ariaLabel="Sophia Johnson" />
      <Avatar src={person3} ariaLabel="Marco DiAngelo" />
      <Avatar src={person4} ariaLabel="Liam Caldwell" />
      <Avatar src={person1} ariaLabel="Julia Martinez" />
      <Avatar src={person2} ariaLabel="Sophia Johnson" />
      <Avatar src={person3} ariaLabel="Marco DiAngelo" />
      <Avatar src={person4} ariaLabel="Liam Caldwell" />
    </AvatarGroup>
  ),

  name: "Counter custom tooltip content"
};

export const VirtualizedList = {
  render: () => {
    const avatars = [
      <Avatar src={person1} ariaLabel="Julia Martinez" />,
      <Avatar src={person2} ariaLabel="Sophia Johnson" />,
      <Avatar src={person3} ariaLabel="Marco DiAngelo" />,
      <Avatar src={person4} ariaLabel="Liam Caldwell" />
    ];

    const getDummyAvatars = multiplier => {
      let result = [];

      for (let i = 0; i < multiplier; ++i) {
        result = result.concat(avatars);
      }

      return result;
    };

    return (
      <AvatarGroup size={Avatar.sizes.LARGE} max={4} counterTooltipIsVirtualizedList type={Avatar.types.IMG}>
        {getDummyAvatars(334)}
      </AvatarGroup>
    );
  },

  name: "Virtualized list"
};

export const DisplayingTeams = {
  render: () => (
    <Table
      columns={[
        {
          id: "name",
          title: "Name"
        },
        {
          id: "email",
          title: "Email"
        },
        {
          id: "title",
          title: "Title"
        },
        {
          id: "teams",
          title: "Teams"
        }
      ]}
    >
      <TableHeader>
        <TableHeaderCell title="Name" />
        <TableHeaderCell title="Email" />
        <TableHeaderCell title="Title" />
        <TableHeaderCell title="Teams" />
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Flex direction={Flex.directions.ROW} gap={Flex.gaps.SMALL}>
              <Avatar type={Avatar.types.IMG} src={person1} size={Avatar.sizes.MEDIUM} ariaLabel="Julia Martinez" />
              Julia Martinez
            </Flex>
          </TableCell>
          <TableCell>julia@martinez.com</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell>
            <AvatarGroup
              size={Avatar.sizes.MEDIUM}
              max={2}
              counterProps={{
                ariaLabelItemsName: "teams"
              }}
            >
              <Avatar
                type={Avatar.types.TEXT}
                text="T1"
                backgroundColor={Avatar.backgroundColors.PEACH}
                ariaLabel="Team 1"
              />
              <Avatar
                type={Avatar.types.TEXT}
                text="T2"
                backgroundColor={Avatar.backgroundColors.BUBBLE}
                ariaLabel="Team 2"
              />
              <Avatar
                type={Avatar.types.TEXT}
                text="T3"
                backgroundColor={Avatar.backgroundColors.BERRY}
                ariaLabel="Team 3"
              />
            </AvatarGroup>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
};
