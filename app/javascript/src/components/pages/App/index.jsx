import React from 'react';
import ReactDOM from 'react-dom';
import style from './App.scss';

export const App = props => (
  <div className={style.myHeadline}>Hello {props.name}!</div>
)
