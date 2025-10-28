import React, { act, useEffect, useRef, useState } from 'react';
import './styles/main.scss';
import { Circle } from './components/Circle/Circle';
import { Slider } from './components/Slider/Slider';

const items = [1, 2, 3, 4, 5, 6];
const peak = 300;

export const App = () => {
  return (
    <div className='container'>
      <Circle groupName='timeline' />
      <Slider groupName='timeline' />
    </div>
  );
};

export default App;
