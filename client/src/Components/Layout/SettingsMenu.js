function SettingsMenu () {
    return (
        <>
    <aside id="rightsidebar" className="right-sidebar">
      <ul className="nav nav-tabs tab-nav-right" role="tablist">
        <li role="presentation">
          <a href="#skins" data-bs-toggle="tab" className="active">
            SKINS
          </a>
        </li>
        <li role="presentation">
          <a href="#settings" data-bs-toggle="tab">
            SETTINGS
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          role="tabpanel"
          className="tab-pane in active in active stretchLeft"
          id="skins"
        >
          <div className="demo-skin">
            <div className="rightSetting">
              <p>SIDEBAR COLOR</p>
              <div className="selectgroup selectgroup-pills sidebar-color mt-3">
                <label className="selectgroup-item">
                  <input
                    type="radio"
                    name="icon-input"
                    defaultValue={1}
                    className="btn-check selectgroup-input select-sidebar"
                    defaultChecked=""
                  />
                  <span
                    className="selectgroup-button selectgroup-button-icon"
                    data-toggle="tooltip"
                    data-original-title="Light Sidebar"
                  >
                    <i className="fas fa-sun" />
                  </span>
                </label>
                <label className="selectgroup-item">
                  <input
                    type="radio"
                    name="icon-input"
                    defaultValue={2}
                    className="btn-check selectgroup-input select-sidebar"
                  />
                  <span
                    className="selectgroup-button selectgroup-button-icon"
                    data-toggle="tooltip"
                    data-original-title="Dark Sidebar"
                  >
                    <i className="fas fa-moon" />
                  </span>
                </label>
              </div>
            </div>
            <div className="rightSetting">
              <p>THEME COLORS</p>
              <div
                className="btn-group theme-color mt-3"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  defaultValue={1}
                  id="btnradio1"
                  autoComplete="off"
                  defaultChecked=""
                />
                <label
                  className="radio-toggle btn btn-outline-primary"
                  htmlFor="btnradio1"
                >
                  Light
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  defaultValue={2}
                  id="btnradio2"
                  autoComplete="off"
                />
                <label
                  className="radio-toggle btn btn-outline-primary "
                  htmlFor="btnradio2"
                >
                  Dark
                </label>
              </div>
            </div>
            <div className="rightSetting">
              <p>SKINS</p>
              <ul className="demo-choose-skin choose-theme list-unstyled">
                <li data-theme="black">
                  <div className="black-theme" />
                </li>
                <li data-theme="white">
                  <div className="white-theme white-theme-border" />
                </li>
                <li data-theme="purple">
                  <div className="purple-theme" />
                </li>
                <li data-theme="blue">
                  <div className="blue-theme" />
                </li>
                <li data-theme="cyan">
                  <div className="cyan-theme" />
                </li>
                <li data-theme="green">
                  <div className="green-theme" />
                </li>
                <li data-theme="orange">
                  <div className="orange-theme" />
                </li>
              </ul>
            </div>
            <div className="rightSetting">
              <p>RTL Layout</p>
              <div className="switch mt-3">
                <label>
                  <input type="checkbox" className="layout-change" />
                  <span className="lever switch-col-red layout-switch" />
                </label>
              </div>
            </div>
            <div className="rightSetting">
              <p>DISK SPACE</p>
              <div className="sidebar-progress">
                <div className="progress m-t-20">
                  <div
                    className="progress-bar l-bg-cyan shadow-style width-per-45"
                    role="progressbar"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <span className="progress-description">
                  <small>26% remaining</small>
                </span>
              </div>
            </div>
            <div className="rightSetting">
              <p>Server Load</p>
              <div className="sidebar-progress">
                <div className="progress m-t-20">
                  <div
                    className="progress-bar l-bg-orange shadow-style width-per-63"
                    role="progressbar"
                    aria-valuenow={63}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <span className="progress-description">
                  <small>Highly Loaded</small>
                </span>
              </div>
            </div>
            <div className="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
              <button
                type="button"
                className="btn btn-outline-primary btn-border-radius btn-restore-theme"
              >
                Restore Default
              </button>
            </div>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane stretchRight" id="settings">
          <div className="demo-settings">
            <p>GENERAL SETTINGS</p>
            <ul className="setting-list">
              <li>
                <span>Report Panel Usage</span>
                <div className="switch">
                  <label>
                    <input type="checkbox" defaultChecked="" />
                    <span className="lever switch-col-green" />
                  </label>
                </div>
              </li>
              <li>
                <span>Email Redirect</span>
                <div className="switch">
                  <label>
                    <input type="checkbox" />
                    <span className="lever switch-col-blue" />
                  </label>
                </div>
              </li>
            </ul>
            <p>SYSTEM SETTINGS</p>
            <ul className="setting-list">
              <li>
                <span>Notifications</span>
                <div className="switch">
                  <label>
                    <input type="checkbox" defaultChecked="" />
                    <span className="lever switch-col-purple" />
                  </label>
                </div>
              </li>
              <li>
                <span>Auto Updates</span>
                <div className="switch">
                  <label>
                    <input type="checkbox" defaultChecked="" />
                    <span className="lever switch-col-cyan" />
                  </label>
                </div>
              </li>
            </ul>
            <p>ACCOUNT SETTINGS</p>
            <ul className="setting-list">
              <li>
                <span>Offline</span>
                <div className="switch">
                  <label>
                    <input type="checkbox" defaultChecked="" />
                    <span className="lever switch-col-red" />
                  </label>
                </div>
              </li>
              <li>
                <span>Location Permission</span>
                <div className="switch">
                  <label>
                    <input type="checkbox" />
                    <span className="lever switch-col-lime" />
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
        </>
    )
}

export default SettingsMenu