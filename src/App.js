import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './components/Navbar'
import profilePic from './img/profile-dummy.png'

function App() {
  return (
    <div className="container-fluid">
        <Navbar 
          // We will replace with the correct username once we have the authentication working
          username="MaxUt"
          profilePic={profilePic}
        />
    </div>
  );
}

export default App;
