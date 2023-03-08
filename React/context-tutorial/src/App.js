import React from 'react';
import ColorBox from './Components/ColorBox';
import SelectColors from './Components/SelectColors';
import { ColorProvider } from './Contexts/color';

const App = () => {
  return (
    <div>
      <ColorProvider>
        <div>
          <SelectColors/>
          <ColorBox/>
        </div>
      </ColorProvider>
    </div>
  );
};

export default App;