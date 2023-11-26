import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Success from "./components/Success";
import Admin from "./components/Admin";
import Update from "./components/Update";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/adminm" element={<Admin/>}></Route>
        <Route path="/success/:name" element={<Success/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
