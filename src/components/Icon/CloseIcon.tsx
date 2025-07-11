import React from 'react';

import { type IconComponentProps } from '.';

function CloseIcon(props: IconComponentProps) {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#CDCDCF"/>
    <path d="M12.9657 7L6.63232 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.63232 7L12.9657 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default CloseIcon;
