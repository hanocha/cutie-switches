import React from 'react';
import ReactDOM from 'react-dom';
import { Ordinary } from '../../layouts/Ordinary';
import { Image } from '../../atoms/Image';
import style from './App.scss';

export const App = props => (
  <Ordinary>
    <Image src='http://cherryamericas.com/wp-content/uploads/2017/04/MX-Silent-Red.jpg' />
  </Ordinary>
);
