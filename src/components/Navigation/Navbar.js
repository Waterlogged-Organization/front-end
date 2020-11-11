import "./Navbar.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Rivers from "../../pages/Rivers";
import Favorites from "../../pages/Favorites";
import Logs from "../../pages/Logs";
import Alerts from "../../pages/Alerts";
import Friends from "../../pages/Friends";
import Profile from "../../pages/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWater,
  faHeart,
  faHistory,
  faBell,
  faUserFriends,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo.svg";
import UserContext from "../User/UserContext";
import { useContext, useState } from "react";

function Navbar(props) {
  const user = useContext(UserContext);
  const [isSidebarOpen, setSidebarState] = useState(true);

  const switchSidebarState = () => {
    setSidebarState(!isSidebarOpen);
  };

  return (
    <Router>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="inner-sidebar">
            <div className="sidebar-layout">
              <div className="sidebar-header">
                <img id="logo" src={logo} alt="logo" />
                Waterlogged
              </div>
              <div className="sidebar-content">
                <nav className="sidebar-menu">
                  <ul>
                    <li>
                      <NavLink to={"/rivers"}>
                        <div className="nav-btn">
                          <div className="nav-btn-icon">
                            <FontAwesomeIcon icon={faWater} />
                          </div>
                          <span>Rivers</span>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/favorites"}>
                        <div className="nav-btn">
                          <div className="nav-btn-icon">
                            <FontAwesomeIcon icon={faHeart} />
                          </div>
                          <span>Favorites</span>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/logs"}>
                        <div className="nav-btn">
                          <div className="nav-btn-icon">
                            <FontAwesomeIcon icon={faHistory} />
                          </div>
                          <span>Logs</span>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/alerts"}>
                        <div className="nav-btn">
                          <div className="nav-btn-icon">
                            <FontAwesomeIcon icon={faBell} />
                          </div>
                          <span>Alerts</span>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/friends"}>
                        <div className="nav-btn">
                          <div className="nav-btn-icon">
                            <FontAwesomeIcon icon={faUserFriends} />
                          </div>
                          <span>Friends</span>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/profile"}>
                        <div className="nav-btn">
                          <div className="nav-btn-icon">
                            <img src={user.profilePic} alt=""></img>
                          </div>
                          <span>{user.username}</span>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mobile-top-bar">
        <button onClick={switchSidebarState}>
          {isSidebarOpen ? (
            <FontAwesomeIcon id="burger-menu-btn" icon={faTimes} />
          ) : (
            <FontAwesomeIcon id="burger-menu-btn" icon={faBars} />
          )}
        </button>
      </div>

      <main>
        <Switch>
          <Route exact path="/rivers" component={Rivers} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/logs" component={Logs} />
          <Route path="/alerts" component={Alerts} />
          <Route path="/friends" component={Friends} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </main>
    </Router>
  );
}

export default Navbar;
