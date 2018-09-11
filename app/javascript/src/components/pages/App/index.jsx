import React from 'react';
import ReactDOM from 'react-dom';
import { Ordinary } from '../../layouts/Ordinary';
import { Switch } from '../../molecules/Switch';
import style from './App.scss';

export const App = props => (
  <Ordinary>
    <Switch />
  </Ordinary>
);
