import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('App called');
  const [state, setState] = useState(0)

  const handleClick = () => {
    setState((item) => item + 1);
  }
  const Button = ({children, handleClick, buttonProp, appState}) => {
    return (
      <>
        <button className="bg-blue-100 p-6 m-6 rounded" onClick={handleClick}>
          {buttonProp} - {children} - {appState}
        </button>
      </>
    )
  }

  return (
    <div className="bg-gray-50 h-screen">
      <div class="grid place-content-center">
        <Button buttonProp={123} handleClick={handleClick} appState={state}>
          Button
        </Button>
      </div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-primary">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
