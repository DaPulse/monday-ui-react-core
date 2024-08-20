/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DropdownProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Dropdown: React.FC<DropdownProps> = ({size, ...props}) => (
  <svg viewBox="0 0 40 40" fill="currentColor" width={ size || "40" } height={ size || "40" } {...props}>
    <path d="M7.5 4C5.567 4 4 5.567 4 7.5V13.5C4 15.433 5.567 17 7.5 17H32.5C34.433 17 36 15.433 36 13.5V7.5C36 5.567 34.433 4 32.5 4H7.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H32.5C32.7762 7 33 7.22386 33 7.5V13.5C33 13.7761 32.7762 14 32.5 14H7.5C7.22386 14 7 13.7761 7 13.5V7.5Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M20.4004 20.4004C21.2288 20.4004 21.9004 21.072 21.9004 21.9004L21.9004 30.8785L24.3398 28.4394C24.9256 27.8535 25.8752 27.8535 26.461 28.4394C27.0468 29.0252 27.0468 29.9748 26.461 30.5606L21.461 35.5606C20.8752 36.1464 19.9255 36.1464 19.3397 35.5606L14.3397 30.5606C13.7539 29.9748 13.7539 29.0252 14.3397 28.4394C14.9255 27.8535 15.8753 27.8535 16.4611 28.4394L18.9004 30.8785V21.9004C18.9004 21.072 19.572 20.4004 20.4004 20.4004Z"
      fill="currentColor" />
  </svg>
);
Dropdown.displayName = 'Dropdown';
export default Dropdown;
/* tslint:enable */
/* eslint-enable */
