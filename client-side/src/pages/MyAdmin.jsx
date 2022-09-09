import React from "react";
import { useState, useEffect } from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import axios from "../api/axios";

function MyAdmin() {
  const [usersCount, setUsersCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [notesCount, setNotesCount] = useState(0);
 

  useEffect(() => {
    async function getUsers() {
      const token = localStorage.getItem("token");
      try {
        const users = await axios.get("/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(users.data.response);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers()
  },[])


  async function GetUsers() {
    const token = localStorage.getItem("token");
    try {
      const users = await axios.get("/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
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
  async function remove(id) {
  const token = localStorage.getItem("token");
   const response =  await axios.delete('/api/user/' + id, {
      headers: { Authorization: `Bearer ${token}` },
   })
   document.location.reload()
    // return (
    //   alert(response.data.response)
      //       <div class="uk-alert-danger" uk-alert>
//     <a class="uk-alert-close" uk-close></a>
//     <p>{response}</p>
// </div>
    // )
    
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
        className="uk-navbar-container uk-margin-left uk-margin-right uk-primary"
        data-uk-navbar>
        <div className="uk-navbar-center">
          
          <a className="uk-navbar-item uk-logo">
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
            {/* {removeUser} */}
            { users.map(data => {
              return (
                <tr key={data.id}>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data._count.notes}</td>
                  <td>
                  
                    <button onClick={()=>remove(data.id)}
                      className="uk-button uk-button-danger uk-button-small"
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
      <div className="uk-section uk-section-xsmall uk-section-secondary">
        <div className="uk-container uk-primary uk-text-center">
          <span className="uk-text-muted" >NoteMe by Group 4</span>
    </div>
</div>
    </>
  );
}
export default MyAdmin;
