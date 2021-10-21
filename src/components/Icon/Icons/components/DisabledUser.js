/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const DisabledUser = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M8.75015 2.0498C8.24254 2.0498 7.7399 2.14979 7.27093 2.34404C6.80196 2.53829 6.37584 2.82302 6.01691 3.18195C5.65798 3.54088 5.37325 3.967 5.179 4.43597C4.98475 4.90494 4.88477 5.40758 4.88477 5.91519C4.88477 6.4228 4.98475 6.92544 5.179 7.39441C5.37325 7.86338 5.65798 8.28949 6.01691 8.64843C6.37584 9.00736 6.80196 9.29209 7.27093 9.48634C7.7399 9.68059 8.24254 9.78057 8.75015 9.78057C9.25776 9.78057 9.7604 9.68059 10.2294 9.48634C10.6983 9.29208 11.1245 9.00736 11.4834 8.64843C11.8423 8.28949 12.127 7.86338 12.3213 7.39441C12.5156 6.92544 12.6155 6.4228 12.6155 5.91519C12.6155 5.40758 12.5156 4.90494 12.3213 4.43597C12.127 3.967 11.8423 3.54088 11.4834 3.18195C11.1245 2.82302 10.6983 2.53829 10.2294 2.34404C9.7604 2.14979 9.25776 2.0498 8.75015 2.0498ZM7.84496 3.72986C8.13194 3.61099 8.43952 3.5498 8.75015 3.5498C9.06078 3.5498 9.36836 3.61099 9.65534 3.72986C9.94233 3.84873 10.2031 4.02296 10.4227 4.24261C10.6424 4.46226 10.8166 4.72301 10.9355 5.01C11.0544 5.29698 11.1155 5.60456 11.1155 5.91519C11.1155 6.22582 11.0544 6.5334 10.9355 6.82038C10.8166 7.10736 10.6424 7.36812 10.4227 7.58777C10.2031 7.80742 9.94232 7.98165 9.65534 8.10052C9.36836 8.21939 9.06078 8.28057 8.75015 8.28057C8.43952 8.28057 8.13194 8.21939 7.84496 8.10052C7.55798 7.98165 7.29722 7.80742 7.07757 7.58777C6.85792 7.36812 6.68369 7.10736 6.56482 6.82038C6.44595 6.5334 6.38477 6.22582 6.38477 5.91519C6.38477 5.60456 6.44595 5.29698 6.56482 5.01C6.68369 4.72301 6.85792 4.46226 7.07757 4.24261C7.29722 4.02296 7.55797 3.84873 7.84496 3.72986Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    <path d="M8.37491 10.7305C8.36306 10.7305 8.3512 10.7307 8.33935 10.7312 7.20884 10.7762 6.1101 11.0767 5.14751 11.6041 4.18491 12.1314 3.39044 12.8682 2.83955 13.7443 2.2887 14.6203 1.9997 15.6068 2 16.6097V17.2981C2 17.6856 2.35443 17.9997 2.79163 17.9997H9.12014L9.12509 17.9997H9.203C9.67351 17.9997 9.96102 17.4465 9.78802 17.0089 9.69353 16.7699 9.47166 16.5965 9.21466 16.5965H9.12963L9.12469 16.5965H3.58328C3.58548 15.8372 3.80542 15.0907 4.22255 14.4273 4.64204 13.7602 5.24701 13.1992 5.97999 12.7977 6.70811 12.3988 7.53853 12.1703 8.39335 12.1337H9.10634C9.55476 12.1529 9.99646 12.2249 10.4202 12.3465 10.6558 12.4142 10.9063 12.3628 11.0942 12.2054 11.4963 11.8685 11.4913 11.1859 10.9888 11.0353 10.4024 10.8595 9.7888 10.7566 9.1655 10.7314 9.15198 10.7308 9.13838 10.7305 9.12469 10.7305H8.37491zM16.9973 14.2587C17.2902 13.9658 17.2902 13.4909 16.9973 13.198 16.7044 12.9051 16.2295 12.9051 15.9367 13.198L14.6992 14.4354 13.4618 13.198C13.1689 12.9051 12.694 12.9051 12.4011 13.198 12.1082 13.4909 12.1082 13.9658 12.4011 14.2587L13.6386 15.4961 12.4011 16.7335C12.1082 17.0264 12.1082 17.5013 12.4011 17.7942 12.694 18.0871 13.1689 18.0871 13.4618 17.7942L14.6992 16.5568 15.9367 17.7942C16.2295 18.0871 16.7044 18.0871 16.9973 17.7942 17.2902 17.5013 17.2902 17.0264 16.9973 16.7335L15.7599 15.4961 16.9973 14.2587z"
      fill="currentColor" />
  </svg>
);
DisabledUser.displayName = 'DisabledUser';
DisabledUser.propTypes = {
  size: PropTypes.string
}
export default DisabledUser;
/* tslint:enable */
/* eslint-enable */
