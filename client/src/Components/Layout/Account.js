function Account () {
    return (
        <li className="dropdown user_profile">
        <div className="dropdown-toggle" data-bs-toggle="dropdown">
          <img src="assets/images/user.jpg" alt="user" />
        </div>
        <ul className="dropdown-menu pullDown">
          <li className="body">
            <ul className="user_dw_menu">
              <li>
                <a href="#" onclick="return false;">
                  <i className="material-icons">person</i>Profile
                </a>
              </li>
              <li>
                <a href="#" onclick="return false;">
                  <i className="material-icons">feedback</i>Feedback
                </a>
              </li>
              <li>
                <a href="#" onclick="return false;">
                  <i className="material-icons">help</i>Help
                </a>
              </li>
              <li>
                <a href="#" onclick="return false;">
                  <i className="material-icons">power_settings_new</i>Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    )
}

export default Account