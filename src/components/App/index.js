import './App.css';
import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import Main from '../Main';
import { useState } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="App">
      <Main menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
}

export default App;
