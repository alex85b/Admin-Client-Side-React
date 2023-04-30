import React, { Component } from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { User } from "../../classes/userClass";
import { Link } from "react-router-dom";

// const Users = () => (
//   <Wrapper>
//     <h1>Users works!</h1>
//   </Wrapper>
// );

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount = async () => {
    try {
      const server_response = await axios.get("users");
      this.setState({ users: server_response.data.data });
    } catch (error) {
      console.log({
        status: "Failure",
        details: "Users fetch failed!",
        error: error,
      });
    }
  };
  render() {
    return (
      <Wrapper>
        <h2>Section title</h2>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <Link to={"/users/create"} className="btn btn-outline-secondary">
            Add
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((u: User) => {
                return (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>
                      {u.first_name} {u.last_name}
                    </td>
                    <td>{u.email}</td>
                    <td>{u.role.name}</td>
                    <td>
                      <div>
                        <a href="#" className="btn btn-outline-secondary me-1">
                          Edit
                        </a>
                        <a href="#" className="btn btn-outline-secondary">
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Wrapper>
    );
  }
}

export default Users;
