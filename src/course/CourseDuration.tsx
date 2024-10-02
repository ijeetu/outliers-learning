import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {text} from '../text';
import {utils} from '../utils';
import {svg} from '../assets/svg';
import {CourseType} from '../types';

type Props = {
  course: CourseType;
  containerStyle?: React.CSSProperties;
};

export const CourseDuration: React.FC<Props> = ({course, containerStyle}) => {
  return (
    <div style={{...utils.rowCenter(), ...containerStyle}}>
      <svg.ClockSvg />
      <text.T14 style={{marginLeft: 6, marginRight: 'auto'}}>
        {course.duration}
      </text.T14>
    </div>
  );
};
