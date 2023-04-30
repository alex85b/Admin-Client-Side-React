import React, { Component, SyntheticEvent } from "react";
import axios, { isCancel, AxiosError } from "axios";
import { async } from "q";
import { Navigate } from "react-router-dom";

class Register extends Component {
  fName: string = "";
  lName: string = "";
  email: string = "";
  passW: string = "";
  passWC: string = "";

  state = {
    redirect: false,
  };

  submit_form = async (event: SyntheticEvent) => {
    event.preventDefault();
    axios
      .post("register", {
        first_name: this.fName,
        last_name: this.lName,
        email: this.email,
        password: this.passW,
        password_confirm: this.passWC,
        role: 3,
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
      return <Navigate to={"/login"} />;
    }

    return (
      <form className="form-signin" onSubmit={this.submit_form}>
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="FName"
            placeholder=" "
            onChange={(event) => {
              this.fName = event.target.value;
            }}
          />
          <label htmlFor="FName" className="label">
            First Name
          </label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="LName"
            placeholder=" "
            onChange={(event) => {
              this.lName = event.target.value;
            }}
          />
          <label htmlFor="LName" className="label">
            Last Name
          </label>
        </div>

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

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="FPasswordConf"
            placeholder=" "
            onChange={(event) => {
              this.passWC = event.target.value;
            }}
          />
          <label htmlFor="FPasswordConf" className="label">
            Password confirm
          </label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Register
        </button>
      </form>
    );
  }
}

export default Register;
