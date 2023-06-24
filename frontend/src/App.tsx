import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route,Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

interface AppProps {
  // Define the types of the props passed to the component
}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
}


import React from 'react'



export default App;