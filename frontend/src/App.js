import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import './App.scss';

function App() {
  return (
      <div className='app'>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
      </div>
  );
}

export default App;
