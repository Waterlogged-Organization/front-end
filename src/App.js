import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "./img/profile-dummy.png";
import UserContext from "./components/User/UserContext";
import "./App.scss";
import Navbar from "./components/Navigation/Navbar";

const user = {
  username: "MaxUt",
  profilePic: profilePic,
};

function App() {
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Navbar />
      </div>
    </UserContext.Provider>
  );
}

export default App;
