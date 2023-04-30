import { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Nav extends Component {
  state = {
    redirect: false,
  };

  handleSignOut = async () => {
    try {
      await axios.post("logout", {});
      this.setState({
        redirect: true,
      });
    } catch (error) {
      console.log({
        status: "Failure",
        details: "Logout request failed!",
        error: error,
      });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to={"/login"} />;
    }
    return (
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
          Company name
        </a>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#" onClick={this.handleSignOut}>
              Sign out
            </a>
          </div>
        </div>
      </header>
    );
  }
}

// const Nav = () => (
//   <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
//     <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
//       Company name
//     </a>
//     <div className="navbar-nav">
//       <div className="nav-item text-nowrap">
//         <a className="nav-link px-3" href="#">
//           Sign out
//         </a>
//       </div>
//     </div>
//   </header>
// );

export default Nav;
