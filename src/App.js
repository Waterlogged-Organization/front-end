import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profilePic from "./img/profile-dummy.png";
import UserContext from "./components/User/UserContext";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWater,
  faHeart,
  faHistory,
  faBell,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./img/logo.svg";
import Rivers from "./pages/Rivers";
import Favorites from "./pages/Favorites";
import Logs from "./pages/Logs";
import Alerts from "./pages/Alerts";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";

const user = {
  username: "MaxUt",
  profilePic: profilePic,
};

function App() {
  return (
    <div className="App">
      <Router>
        <ProSidebar breakPoint="sm" collapsed={false}>
          <SidebarHeader>
            <img id="logo" src={logo} alt="logo" />
            Waterlogged
          </SidebarHeader>
          <SidebarContent>
            <Menu>
              <MenuItem active={true} icon={<FontAwesomeIcon icon={faWater} />}>
                River
                <NavLink to={"/rivers" }>
                </NavLink>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faHeart} />}>
                Favorites
                <NavLink to={"/favorites"} />
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faHistory} />}>
                Logs
                <NavLink to={"/logs"} />
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faBell} />}>
                Alerts
                <NavLink to={"/alerts"} />
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faUserFriends} />}>
                Friends
                <NavLink to={"/friends"} />
              </MenuItem>
              <MenuItem icon={<img src={user.profilePic} alt=""></img>}>
                {user.username}
                <NavLink to={"/profile"} />
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
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
    </div>

    // To use later when we need contexte from the current user
    // <UserContext.Provider value={user}>
    // </UserContext.Provider>
  );
}

export default App;
