/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface RobotProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Robot: React.FC<RobotProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M11.0151 4.16666C11.0151 3.75244 10.6794 3.41666 10.2651 3.41666C9.85093 3.41666 9.51514 3.75244 9.51514 4.16666V5.57575L6.66666 5.57575C5.14787 5.57575 3.91666 6.80697 3.91666 8.32575V8.48484H3.72726C2.76077 8.48484 1.97726 9.26834 1.97726 10.2348V12.1136C1.97726 13.0801 2.76077 13.8636 3.72727 13.8636H3.91666V14.0227C3.91666 15.5415 5.14788 16.7727 6.66666 16.7727H13.3333C14.8521 16.7727 16.0833 15.5415 16.0833 14.0227V13.8636H16.2727C17.2392 13.8636 18.0227 13.0801 18.0227 12.1136V10.2348C18.0227 9.26834 17.2392 8.48484 16.2727 8.48484H16.0833V8.32575C16.0833 6.80696 14.8521 5.57575 13.3333 5.57575L11.0151 5.57575V4.16666ZM14.5833 13.1136L14.5833 13.1148V14.0227C14.5833 14.7131 14.0237 15.2727 13.3333 15.2727H6.66666C5.9763 15.2727 5.41666 14.7131 5.41666 14.0227V13.1136V9.23484V8.32575C5.41666 7.63539 5.9763 7.07575 6.66666 7.07575H13.3333C14.0237 7.07575 14.5833 7.63539 14.5833 8.32575V9.23363L14.5833 9.23484V13.1136ZM16.2727 12.3636H16.0833V9.98484H16.2727C16.4108 9.98484 16.5227 10.0968 16.5227 10.2348V12.1136C16.5227 12.2517 16.4108 12.3636 16.2727 12.3636ZM3.91666 12.3636V9.98484H3.72726C3.58919 9.98484 3.47726 10.0968 3.47726 10.2348V12.1136C3.47726 12.2517 3.58919 12.3636 3.72727 12.3636H3.91666ZM9.07575 9.98484C9.07575 9.57062 8.73996 9.23484 8.32575 9.23484C7.91154 9.23484 7.57575 9.57062 7.57575 9.98484V11.3939C7.57575 11.8081 7.91154 12.1439 8.32575 12.1439C8.73996 12.1439 9.07575 11.8081 9.07575 11.3939V9.98484ZM12.2045 9.23484C12.6187 9.23484 12.9545 9.57062 12.9545 9.98484V11.3939C12.9545 11.8081 12.6187 12.1439 12.2045 12.1439C11.7903 12.1439 11.4545 11.8081 11.4545 11.3939V9.98484C11.4545 9.57062 11.7903 9.23484 12.2045 9.23484Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Robot.displayName = 'Robot';
export default Robot;
/* tslint:enable */
/* eslint-enable */
