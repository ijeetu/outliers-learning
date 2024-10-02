import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export const FacebookSvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={13}
      height={20}
      fill='none'
    >
      <path
        fill='#3B5999'
        d='M11.25.004 8.655 0C5.742 0 3.859 1.932 3.859 4.922v2.27H1.251a.408.408 0 0 0-.407.407v3.288c0 .226.182.408.407.408H3.86v8.297c0 .226.182.408.408.408h3.402a.408.408 0 0 0 .408-.408v-8.297h3.049a.408.408 0 0 0 .408-.408l.001-3.288a.409.409 0 0 0-.408-.408h-3.05V5.268c0-.925.22-1.394 1.425-1.394l1.747-.001a.408.408 0 0 0 .407-.408V.412a.408.408 0 0 0-.407-.408Z'
      />
    </svg>
  );
};
