import React, { Component, SyntheticEvent } from "react";
import "./Public.css";
import axios from "axios";
import { Navigate } from "react-router";

class Login extends Component {
  email: string = "";
  passW: string = "";

  state = {
    redirect: false,
  };

  submit_form = async (event: SyntheticEvent) => {
    event.preventDefault();
    axios
      .post("login", {
        email: this.email,
        password: this.passW,
      })
      .then((data) => {
        this.setState({
          redirect: true,
        });
      })
      .catch((error) => {
        console.log({
          result: "Failure",
          data: error,
        });
      });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to={"/"} />;
    }

    return (
      <form className="form-signin" onSubmit={this.submit_form}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="FEmail"
            placeholder=" "
            onChange={(event) => {
              this.email = event.target.value;
            }}
          />
          <label htmlFor="FEmail" className="label">
            Email address
          </label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="FPassword"
            placeholder=" "
            onChange={(event) => {
              this.passW = event.target.value;
            }}
          />
          <label htmlFor="FPassword" className="label">
            Password
          </label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    );
  }
}

export default Login;
