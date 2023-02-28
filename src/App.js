
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";


function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}


export default App;