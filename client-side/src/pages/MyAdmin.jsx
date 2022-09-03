import React from "react";
import { useState, useEffect } from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import axios from "../api/axios";

function MyAdmin() {
  const [usersCount, setUsersCount] = useState(0);
  const [notesCount, setNotesCount] = useState(0);

  async function GetUsers() {
    const token = localStorage.getItem("token");
    try {
      const users = await axios.get("/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(users.data.response);
      return users.data.response;
    } catch (error) {
      console.log(error);
    }
  }

  async function GetNotesCount() {
    const token = localStorage.getItem("token");
    try {
      const notesCount = await axios.get("/api/note/admin", {
        headers: { Authorization: `Bearer ${token}` },
      });

      return notesCount.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetUsers().then((data) => setUsersCount(data));
  }, []);
  useEffect(() => {
    GetNotesCount().then((data) => setNotesCount(data));
  }, []);

  return (
    <>
      <nav
        className="uk-navbar-container uk-margin uk-nav-primary"
        data-uk-navbar
      >
        <div className="uk-navbar-center">
          <a className="uk-navbar-item uk-logo" href="#">
            Noted App Stats
          </a>
        </div>
      </nav>

      <div className="uk-section uk-section-primary">
        <div className="uk-container">
          <div className="uk-child-width-1-2@m uk-text-center" data-uk-grid>
            <div>
              <div className="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
                <h2 className="uk-h1">{usersCount.length}</h2>
                <p>Users</p>
              </div>
            </div>

            <div>
              <div className="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
                <h2 className="uk-h1">{notesCount}</h2>
                <p>Notes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-container uk-margin-large">
        <h3 className="uk-text-lead uk-text-bold uk-text-center">
          List of users
        </h3>
        <table className="uk-table uk-table-small uk-table-justify uk-table-hover uk-table-divider uk-margin">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>No. of Notes</th>
              <th className="uk-table-shrink">Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersCount.map((data) => {
              return (
                <tr>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data._count.notes}</td>
                  <td>
                    <button
                      class="uk-button uk-button-default uk-button-small"
                      type="button"
                    >
                      ADMIN
                    </button>
                    <button
                      class="uk-button uk-button-danger uk-button-small"
                      id={data.id}
                      type="button"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MyAdmin;
