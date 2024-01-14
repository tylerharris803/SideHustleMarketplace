function Notifications () {
    return (
      <li className="dropdown">
      <a
        href="#"
        onclick="return false;"
        className="dropdown-toggle"
        data-bs-toggle="dropdown"
        role="button"
      >
        <i className="far fa-bell" />
        <span className="notify" />
        <span className="heartbeat" />
      </a>
      <ul className="dropdown-menu pullDown">
        <li className="header">NOTIFICATIONS</li>
        <li className="body">
          <ul className="menu">
            <li>
              <a href="#" onclick="return false;">
                <span className="table-img msg-user">
                  <img src="assets/images/user/user1.jpg" alt="" />
                </span>
                <span className="menu-info">
                  <span className="menu-title">Sarah Smith</span>
                  <span className="menu-desc">
                    <i className="material-icons">access_time</i> 14 mins
                    ago
                  </span>
                  <span className="menu-desc">
                    Please check your email.
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" onclick="return false;">
                <span className="table-img msg-user">
                  <img src="assets/images/user/user2.jpg" alt="" />
                </span>
                <span className="menu-info">
                  <span className="menu-title">Airi Satou</span>
                  <span className="menu-desc">
                    <i className="material-icons">access_time</i> 22 mins
                    ago
                  </span>
                  <span className="menu-desc">
                    Please check your email.
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" onclick="return false;">
                <span className="table-img msg-user">
                  <img src="assets/images/user/user3.jpg" alt="" />
                </span>
                <span className="menu-info">
                  <span className="menu-title">John Doe</span>
                  <span className="menu-desc">
                    <i className="material-icons">access_time</i> 3 hours
                    ago
                  </span>
                  <span className="menu-desc">
                    Please check your email.
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" onclick="return false;">
                <span className="table-img msg-user">
                  <img src="assets/images/user/user4.jpg" alt="" />
                </span>
                <span className="menu-info">
                  <span className="menu-title">Ashton Cox</span>
                  <span className="menu-desc">
                    <i className="material-icons">access_time</i> 2 hours
                    ago
                  </span>
                  <span className="menu-desc">
                    Please check your email.
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" onclick="return false;">
                <span className="table-img msg-user">
                  <img src="assets/images/user/user5.jpg" alt="" />
                </span>
                <span className="menu-info">
                  <span className="menu-title">Cara Stevens</span>
                  <span className="menu-desc">
                    <i className="material-icons">access_time</i> 4 hours
                    ago
                  </span>
                  <span className="menu-desc">
                    Please check your email.
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" onclick="return false;">
                <span className="table-img msg-user">
                  <img src="assets/images/user/user6.jpg" alt="" />
                </span>
                <span className="menu-info">
                  <span className="menu-title">Charde Marshall</span>
                  <span className="menu-desc">
                    <i className="material-icons">access_time</i> 3 hours
                    ago
                  </span>
                  <span className="menu-desc">
                    Please check your email.
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" onclick="return false;">
                <span className="table-img msg-user">
                  <img src="assets/images/user/user7.jpg" alt="" />
                </span>
                <span className="menu-info">
                  <span className="menu-title">John Doe</span>
                  <span className="menu-desc">
                    <i className="material-icons">access_time</i>{" "}
                    Yesterday
                  </span>
                  <span className="menu-desc">
                    Please check your email.
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li className="footer">
          <a href="#" onclick="return false;">
            View All Notifications
          </a>
        </li>
      </ul>
    </li>
    )
}

export default Notifications