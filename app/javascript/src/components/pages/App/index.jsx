import React from 'react';
import ReactDOM from 'react-dom';
import { Ordinary } from '../../layouts/Ordinary';
import style from './App.scss';

export const App = props => (
  <Ordinary>
    <div className={style.myHeadline}>Hello React!</div>
  </Ordinary>
);
