import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import pic1 from "./images/logo-6.png";
import State from "./components/State";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import MainLayout from "./components/MainLayout";
import Registration from "./components/Registration";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [store, setStore] = useState("")
  return (
    <div>
      {JSON.stringify(store)}
      <BrowserRouter>
        <Routes>
          <Route path = "/" element= {<MainLayout/>}>
          <Route path = "/login" element= {<Login/>}/>
          <Route path = "/registration" element= {<Registration regData={setStore}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
