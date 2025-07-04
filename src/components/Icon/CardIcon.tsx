import React from 'react';

const CardIcon: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22.5" cy="22.5" r="22.5" fill="#181C2E"/>
    <path d="M17 12.9998L14 16.9998V30.9998C14 31.5302 14.2107 32.0389 14.5858 32.414C14.9609 32.789 15.4696 32.9998 16 32.9998H30C30.5304 32.9998 31.0391 32.789 31.4142 32.414C31.7893 32.0389 32 31.5302 32 30.9998V16.9998L29 12.9998H17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 16.9998H32" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27 20.9998C27 22.0606 26.5786 23.078 25.8284 23.8282C25.0783 24.5783 24.0609 24.9998 23 24.9998C21.9391 24.9998 20.9217 24.5783 20.1716 23.8282C19.4214 23.078 19 22.0606 19 20.9998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default CardIcon;
