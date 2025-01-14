import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

interface RowCenterOptions {
  gap?: number;
  wrap?: boolean;
}

const rowCenter = ({gap, wrap}: RowCenterOptions = {}): React.CSSProperties => {
  return {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: gap !== undefined ? `${gap}px` : undefined,
    flexWrap: wrap ? 'wrap' : 'nowrap',
  };
};

export default rowCenter;
