import { Decorator } from '@storybook/react';
import { ArgTypes, Tag } from '@storybook/types';

export type EnumPropNames = {
  propName: string;
  enumName: string;
};

export type ActionProps = {
  name: string;
  linkedToPropValue: string;
};

export type IconMetaData = {
  file: string;
  name: string;
};

export type AllowedIcons = {
  options: string[];
  mapping: { [key: string]: unknown };
};

export type StoryMetaSettingsArgs = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  enumPropNamesArray?: Array<string | EnumPropNames>;
  iconPropNamesArray?: string[];
  actionPropsArray?: Array<string | ActionProps>;
  allIconsComponents: { [key: string]: unknown };
  iconsMetaData?: IconMetaData[];
  ignoreControlsPropNamesArray?: string[];
  isInternal?: boolean;
  shouldCreateAutodocsPage?: boolean;
};

export type StoryMetaSettingsResult = {
  argTypes: Partial<ArgTypes>;
  decorators: Decorator[];
  tags: Tag[];
};
