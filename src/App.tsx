import React, { act, useEffect, useRef, useState } from 'react';
import './styles/main.scss';
import { Circle } from './components/Circle/Circle';

const items = [1, 2, 3, 4, 5, 6];
const peak = 300;

export const App = () => {
  return (
    <>
      <Circle />
      <Circle />
    </>
  );
};

export default App;
