/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Academy = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M9.63884 2.34268C9.86376 2.21911 10.1362 2.21911 10.3612 2.34268L18.3612 6.7382C18.601 6.86997 18.75 7.12188 18.75 7.39551C18.75 7.66915 18.601 7.92106 18.3612 8.05283L15.8731 9.41994L15.9082 13.8724C15.9082 14.1639 15.7858 14.4057 15.6772 14.5686C15.5615 14.7422 15.4107 14.9019 15.2486 15.0452C14.9231 15.3329 14.4827 15.6148 13.9708 15.8624C12.9445 16.3588 11.5413 16.76 9.98945 16.76C8.43763 16.76 7.03444 16.3588 6.00809 15.8624C5.49625 15.6148 5.05585 15.3329 4.73029 15.0452C4.56821 14.9019 4.41742 14.7422 4.30171 14.5686C4.19312 14.4057 4.07077 14.1639 4.07077 13.8724V9.38898L3.33509 8.98479C3.293 9.05241 3.25341 9.1217 3.21623 9.19266C2.91361 9.77034 2.75 10.4999 2.75 11.4108C2.75 11.4108 2.75 11.4108 2.75 11.4108L2.7501 13.5588C2.75012 13.973 2.41435 14.3088 2.00013 14.3088C1.58592 14.3088 1.25012 13.9731 1.2501 13.5589L1.25 11.4109C1.25 10.3249 1.44475 9.34178 1.88752 8.49659C1.92936 8.41672 1.97323 8.33844 2.01911 8.26177L1.63885 8.05284C1.39903 7.92108 1.25 7.66916 1.25 7.39553C1.25 7.12189 1.39902 6.86997 1.63884 6.7382L9.63884 2.34268ZM4.47158 7.89771L10.0003 10.9353L16.4425 7.39553L10 3.85575L5.37354 6.39771H9.91656C10.3308 6.39771 10.6666 6.7335 10.6666 7.14771C10.6666 7.56193 10.3308 7.89771 9.91656 7.89771H4.47158ZM5.57077 10.2131V13.7651C5.59922 13.8011 5.64767 13.8541 5.7236 13.9212C5.92115 14.0958 6.23767 14.3072 6.66119 14.512C7.50554 14.9204 8.68669 15.26 9.98945 15.26C11.2922 15.26 12.4734 14.9204 13.3177 14.512C13.7412 14.3072 14.0578 14.0958 14.2553 13.9212C14.3305 13.8548 14.3787 13.8022 14.4073 13.7662L14.3795 10.2406L10.3615 12.4484C10.1365 12.5719 9.86406 12.5719 9.63914 12.4484L5.57077 10.2131Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Academy.displayName = 'Academy';
Academy.propTypes = {
  size: PropTypes.string
}
export default Academy;
/* tslint:enable */
/* eslint-enable */
