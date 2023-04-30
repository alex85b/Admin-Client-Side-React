import "./App.css";
import Login from "./public/Login";
import Register from "./public/Register";
import Dashboard from "./secure/dashboard/Dashboard";
import Users from "./secure/users/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={Dashboard} />
          <Route path={"/users"} Component={Users} />
          <Route path={"/login"} Component={Login} />
          <Route path={"/register"} Component={Register} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
