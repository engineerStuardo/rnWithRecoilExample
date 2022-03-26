import React from 'react';
import {RecoilRoot} from 'recoil';

import {Counter} from './src/screens/Counter';

const App = () => {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
};

export default App;
