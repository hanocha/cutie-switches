import React from 'react';
import style from './Ordinary.scss';

export const Ordinary = ({ children }) => (
  <div className={style.my}>
    {children}
  </div>
);
