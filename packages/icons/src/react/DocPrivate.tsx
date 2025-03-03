/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface DocPrivateProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const DocPrivate: React.FC<DocPrivateProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M16.4057 7.56686C16.4057 7.58719 16.4049 7.60733 16.4033 7.62725V8.31519H14V8.31686H11.7624C11.3053 8.31686 10.867 8.1353 10.5438 7.81211C10.2206 7.48892 10.0391 7.05059 10.0391 6.59353V3.50488L4.97333 3.4502C4.9141 3.4502 4.8573 3.47372 4.81541 3.51561C4.77353 3.55749 4.75 3.6143 4.75 3.67353V16.3269C4.75 16.3861 4.77353 16.4429 4.81541 16.4848C4.8573 16.5267 4.9141 16.5502 4.97333 16.5502H10.3008V18.0502H4.97333C4.51627 18.0502 4.07794 17.8686 3.75475 17.5454C3.43157 17.2223 3.25 16.7839 3.25 16.3269V3.67353C3.25 3.21647 3.43157 2.77814 3.75475 2.45495C4.07794 2.13176 4.51628 1.9502 4.97333 1.9502H10.8704C11.3271 1.95029 11.7653 2.1317 12.0884 2.45456L15.8988 6.265C16.2217 6.58807 16.4032 7.02626 16.4033 7.483V7.50648C16.4049 7.5264 16.4057 7.54653 16.4057 7.56686ZM14.3293 6.81686L11.5391 4.02658V6.59353C11.5391 6.65276 11.5626 6.70956 11.6045 6.75145C11.6464 6.79333 11.7032 6.81686 11.7624 6.81686H14.3293Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M6.66895 9.85016C6.25473 9.85016 5.91895 10.1859 5.91895 10.6002 5.91895 11.0144 6.25473 11.3502 6.66895 11.3502H11C11.4142 11.3502 11.75 11.0144 11.75 10.6002 11.75 10.1859 11.4142 9.85016 11 9.85016H6.66895zM5.9191 13.8002C5.9191 13.3859 6.25489 13.0502 6.6691 13.0502H9C9.41421 13.0502 9.75 13.3859 9.75 13.8002 9.75 14.2144 9.41421 14.5502 9 14.5502H6.6691C6.25489 14.5502 5.9191 14.2144 5.9191 13.8002z"
      fill="currentColor" />
    <path d="M12.1689 13.4777H12.8633V12.465C12.8633 10.8276 14.1907 9.50018 15.8281 9.50018C17.4654 9.50018 18.7928 10.8276 18.7928 12.465V13.4777H19.4919C19.762 13.4777 19.981 13.6967 19.981 13.9668V19.511C19.981 19.7811 19.762 20.0002 19.4919 20.0002H12.1689C11.8987 20.0002 11.6797 19.7811 11.6797 19.511V13.9668C11.6797 13.6967 11.8987 13.4777 12.1689 13.4777ZM17.2928 12.465V13.4777H14.3633V12.465C14.3633 11.656 15.0191 11.0002 15.8281 11.0002C16.637 11.0002 17.2928 11.656 17.2928 12.465Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
DocPrivate.displayName = 'DocPrivate';
export default DocPrivate;
/* tslint:enable */
/* eslint-enable */
