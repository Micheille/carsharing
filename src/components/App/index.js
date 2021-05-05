import { useState } from 'react';
import Main from '../Main';

import '@fontsource/roboto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.scss';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="App">
      <Main menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
}

export default App;
