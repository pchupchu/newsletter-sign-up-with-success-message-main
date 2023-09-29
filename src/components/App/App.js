import { useState } from 'react';
import Main from '../Main/Main';
import './App.css'
import Popup from '../Popup/Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <div className="app">
      <Main openPopup={openPopup} />
      <Popup isOpen={isOpen} onClose={closePopup} />
    </div>
  );
}

export default App;