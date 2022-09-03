import React from "react";
import "uikit/dist/css/uikit.min.css"; 
import "uikit/dist/js/uikit.min.js"; 


function MyAdmin() {
  return (
    <>
      <nav className="uk-navbar-container uk-margin uk-nav-primary" data-uk-navbar>
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
                <h2 className="uk-h1">163</h2>
                <p>Users</p>
              </div>
            </div>

            <div>
            <div className="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
                <h2 className="uk-h1">1152</h2>
                <p>Notes</p>
              </div>
            </div>
                      
          </div>
        </div>
    </div>
          <div className="uk-container uk-margin-large">
              
<h3 className="uk-text-lead uk-text-bold uk-text-center">List of users</h3>
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
        <tr>
            <td>Big name</td>
            <td>big@name.com</td>
            <td>56</td>
            <td>
                <button class="uk-button uk-button-default uk-button-small" type="button">ADMIN</button> 
                <button class="uk-button uk-button-danger uk-button-small" type="button">DELETE</button>            
            </td>
        </tr>
        <tr>
            <td>Big name</td>
            <td>big@name.com</td>
            <td>56</td>
            <td>
                <button class="uk-button uk-button-default uk-button-small" type="button">ADMIN</button> 
                <button class="uk-button uk-button-danger uk-button-small" type="button">DELETE</button>            
            </td>
        </tr>
        <tr>
            <td>Big name</td>
            <td>big@name.com</td>
            <td>56</td>
            <td>
                <button class="uk-button uk-button-default uk-button-small" type="button">ADMIN</button> 
                <button class="uk-button uk-button-danger uk-button-small" type="button">DELETE</button>            
            </td>
        </tr>
      
    </tbody>
</table>
</div>
    </>
  );
}
export default MyAdmin;
