import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export const GiftSvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      fill='none'
    >
      <path
        stroke='#111'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M16.667 10v8.333H3.333V10M18.333 5.833H1.667V10h16.666V5.833ZM10 18.333v-12.5M10 5.833H6.25a2.083 2.083 0 1 1 0-4.166c2.917 0 3.75 4.166 3.75 4.166ZM10 5.833h3.75a2.083 2.083 0 0 0 0-4.166c-2.917 0-3.75 4.166-3.75 4.166Z'
      />
    </svg>
  );
};
