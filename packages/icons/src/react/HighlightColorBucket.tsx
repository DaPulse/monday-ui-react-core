/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface HighlightColorBucketProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const HighlightColorBucket: React.FC<HighlightColorBucketProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6.34344 4.11612C6.57786 3.8817 6.8958 3.75 7.22732 3.75C7.39148 3.75 7.55402 3.78233 7.70568 3.84515C7.85734 3.90797 7.99514 4.00004 8.11121 4.11612C8.22728 4.23219 8.31936 4.36999 8.38217 4.52165C8.38681 4.53283 8.39127 4.54407 8.39557 4.55537C8.29619 4.61768 8.20333 4.69139 8.11905 4.77566L5.97733 6.918V5C5.97733 4.66848 6.10902 4.35054 6.34344 4.11612ZM4.47733 8.41843V5C4.47733 4.27065 4.76706 3.57118 5.28278 3.05546C5.79851 2.53973 6.49798 2.25 7.22732 2.25C7.58846 2.25 7.94606 2.32113 8.2797 2.45933C8.61335 2.59753 8.91651 2.8001 9.17187 3.05546C9.42723 3.31082 9.62979 3.61398 9.76799 3.94762C9.83894 4.1189 9.89221 4.2965 9.92726 4.47764C10.0798 4.55293 10.2204 4.65314 10.343 4.77566L16.1371 10.5711C16.2915 10.7258 16.3995 10.9214 16.448 11.1345C16.4964 11.3476 16.4837 11.5701 16.4114 11.7764C16.339 11.9826 16.2099 12.1642 16.039 12.3004C15.868 12.4365 15.6621 12.5217 15.4449 12.546L13.9384 12.7137L10.3433 16.3087C10.0447 16.6077 9.68966 16.8452 9.29927 17.007C8.90873 17.169 8.49011 17.2523 8.06734 17.2523C7.64457 17.2523 7.22594 17.169 6.8354 17.007C6.44499 16.8452 6.09029 16.608 5.7916 16.309L3.46525 13.9819C3.16639 13.6833 2.92898 13.3283 2.7672 12.938C2.60536 12.5476 2.52206 12.129 2.52206 11.7064C2.52206 11.2837 2.60536 10.8652 2.7672 10.4747C2.92904 10.0843 3.16624 9.72952 3.46525 9.43079L4.47733 8.41843ZM9.17963 5.8364L4.52574 10.4916C4.36617 10.651 4.23926 10.8407 4.15289 11.0491C4.06652 11.2574 4.02206 11.4808 4.02206 11.7064C4.02206 11.9319 4.06652 12.1553 4.15289 12.3637C4.23926 12.572 4.36585 12.7614 4.52542 12.9208L6.85241 15.2484C7.01185 15.4081 7.20146 15.535 7.40988 15.6214C7.6183 15.7078 7.84171 15.7523 8.06734 15.7523C8.29296 15.7523 8.51637 15.7078 8.72479 15.6214C8.93322 15.535 9.12256 15.4084 9.282 15.2487L13.0637 11.467C13.1841 11.3466 13.3418 11.2708 13.5111 11.252L14.578 11.1332L9.28238 5.8364C9.26877 5.82284 9.25023 5.81512 9.231 5.81512C9.21173 5.81512 9.19325 5.82278 9.17963 5.8364ZM15.4947 13.5053L14.392 15.7106C14.2763 15.942 14.2364 16.204 14.2779 16.4593C14.3194 16.7147 14.4403 16.9505 14.6233 17.1333C14.7377 17.2479 14.8736 17.3389 15.0231 17.4009C15.1727 17.463 15.3331 17.4949 15.495 17.4949C15.6569 17.4949 15.8173 17.463 15.9668 17.4009C16.1164 17.3389 16.2523 17.2479 16.3667 17.1333C16.5496 16.9504 16.6703 16.7146 16.7117 16.4592C16.7531 16.2039 16.7131 15.942 16.5973 15.7106L15.4947 13.5053Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
HighlightColorBucket.displayName = 'HighlightColorBucket';
export default HighlightColorBucket;
/* tslint:enable */
/* eslint-enable */
