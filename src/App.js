import './App.css';
import Navbar from './components/Navbar.js';
import TextEditor from './components/TextEditor.js';
import Alert from './components/Alert.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Jokes from './components/Jokes.js';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  }


  const toogle = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#1d1d58";
      document.body.style.color = "white";
      setMode("dark");
      showAlert("Dark Mode On.", "success");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("light");
      showAlert("Dark Mode Off.", "success");
    }
  }
  return (
    <>

      <Router>
        <Navbar heading="Text Editor" mode={mode} toogle={toogle} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/jokes" element={<Jokes mode={mode} />} />
          <Route exact path="/" element={<TextEditor showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
