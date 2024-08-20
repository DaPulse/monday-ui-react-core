/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ConvertToSubitemProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const ConvertToSubitem: React.FC<ConvertToSubitemProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M3.5 4.5V7.5H9.5V4.5H3.5ZM3 3C2.44772 3 2 3.44772 2 4V8C2 8.55228 2.44772 9 3 9H10C10.5523 9 11 8.55228 11 8V6.7073V5.2927V4C11 3.44772 10.5523 3 10 3H3Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M11.2501 5.25C11.1624 5.25 11.0782 5.26505 11 5.2927C11 5.2927 11 5.67347 11 6C11 6.32653 11 6.7073 11 6.7073C11.0782 6.73495 11.1624 6.75 11.2501 6.75H12.2501C12.9404 6.75 13.5001 7.30964 13.5001 8V14.4999L11.8357 13.0317C11.5769 12.7083 11.105 12.6558 10.7815 12.9146C10.4581 13.1734 10.4056 13.6453 10.6644 13.9688L13.6644 16.7188C13.8067 16.8967 14.0222 17.0003 14.25 17.0003C14.4779 17.0002 14.6934 16.8967 14.8357 16.7188L17.8357 13.9688C18.0944 13.6453 18.042 13.1734 17.7185 12.9146C17.3951 12.6558 16.9231 12.7083 16.6644 13.0317L15 14.5002L15 9.72619C15 9.7228 15.0001 9.71941 15.0001 9.71601V8C15.0001 6.48122 13.7688 5.25 12.2501 5.25H11.2501Z"
      fill="currentColor" />
  </svg>
);
ConvertToSubitem.displayName = 'ConvertToSubitem';
export default ConvertToSubitem;
/* tslint:enable */
/* eslint-enable */
