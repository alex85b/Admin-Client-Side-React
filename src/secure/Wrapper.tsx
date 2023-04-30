import React, { Component, ReactNode } from "react";
import SideBar from "./components/SideBar";
import Nav from "./components/Nav";
import axios from "axios";
import { Navigate } from "react-router";

interface Props {
  children: ReactNode;
}

class Wrapper extends Component<Props> {
  state = {
    redirect: false,
  };

  componentDidMount = async () => {
    // Get a response from the server for:
    // This session, requesting the /users route.
    try {
      const response = await axios.get("users");
    } catch (error) {
      console.log("Not authenticated.");

      this.setState({
        redirect: true,
      });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to={"/login"} />;
    }

    return (
      <>
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {this.props.children}
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default Wrapper;
