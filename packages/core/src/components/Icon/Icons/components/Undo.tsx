/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface UndoProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Undo: React.FC<UndoProps> = ({size, ...props}) => (
  <svg viewBox="0 0 39 39" fill="currentColor" width={ size || "39" } height={ size || "39" } {...props}>
    <path d="M12.9253 10.7548C13.4806 10.1995 13.4806 9.29924 12.9253 8.74398C12.3701 8.18869 11.4698 8.18869 10.9145 8.74398L4.41451 15.244C3.85923 15.7993 3.85923 16.6995 4.41451 17.2548L10.9145 23.7547C11.4698 24.3101 12.3701 24.3101 12.9253 23.7547C13.4806 23.1996 13.4806 22.2992 12.9253 21.7439L8.85267 17.6713L24.9207 17.6713C26.8422 17.6713 28.685 18.4345 30.0435 19.7933C31.4023 21.1518 32.1655 22.9946 32.1655 24.9161V29.2494C32.1655 30.0347 32.8022 30.6713 33.5874 30.6713C34.3727 30.6713 35.0094 30.0347 35.0094 29.2494V24.9161C35.0094 22.2403 33.9464 19.6743 32.0544 17.7824C30.1625 15.8904 27.5965 14.8275 24.9207 14.8275H8.8527L12.9253 10.7548Z"
      fill="currentColor" />
  </svg>
);
Undo.displayName = 'Undo';
export default Undo;
/* tslint:enable */
/* eslint-enable */
