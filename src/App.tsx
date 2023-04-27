import "./App.css";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
