import React from 'react';
import { Switch } from '../../molecules/Switch';
import { Ordinary } from '../../layouts/Ordinary';
import style from './Switch.scss';

export const List = ({ switches }) => (
  <Ordinary>
    <div className={style.detailContainer}>
      {switches.map((_switch, i) => {
        return (
          <Switch key={i} />
        );
      })}
    </div>
  </Ordinary>
);
