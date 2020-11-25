import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import './App.scss';
import Modal from "./Components/Widgets/Modal";
import Umbrella from "./icons/Umbrella";

function App() {
    const [open, setOpen] = useState(true);

    const header = (
        <>
            <Umbrella className='umbrella small' />
            <a href='/' className='page-link'>Umbrella Hub</a>
        </>
    )
    return (
      <div className='app'>
          <div className='start-container'>
              <Modal
                  header={header}
                  open={open}
                  hideModal={() => setOpen(false)}
                  showCloseIcon
              >
                  <BrowserRouter>
                    <Routes />
                  </BrowserRouter>

              </Modal>
          </div>
      </div>
    );
}

export default App;
