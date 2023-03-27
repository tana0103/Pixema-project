import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { AppGlobalState } from './AppGlobalStore/globalStore';
import { Routs } from './Routes/Routes';

function App() {
  const theme = useSelector((state:AppGlobalState)=> state.theme.className)
  return (
    <div className={theme}>
    <div className="App">
      <Routs/>
      </div>
    </div>
  );
}

export default App;
