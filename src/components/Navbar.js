import './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Rivers from '../pages/Rivers'
import Favorites from '../pages/Favorites'
import Logs from '../pages/Logs'
import Alerts from '../pages/Alerts'
import Friends from '../pages/Friends'
import Profile from '../pages/Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faHeart, faHistory, faBell, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import logo from '../img/logo.svg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Navbar(props) {
    return(
        <Router>
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <nav className="navbar">
                            <img id="logo" src={logo} alt="logo" />
                            <ul>
                                <li>
                                    <Link to={'/rivers'}>
                                        <div className="nav-btn">
                                            <FontAwesomeIcon icon={faWater} />
                                            <span>Rivers</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/favorites'}>
                                        <div className="nav-btn">
                                            <FontAwesomeIcon icon={faHeart} />
                                            <span>Favorites</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/logs'}>
                                        <div className="nav-btn">
                                            <FontAwesomeIcon icon={faHistory} />
                                            <span>Logs</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/alerts'}>
                                        <div className="nav-btn">
                                            <FontAwesomeIcon icon={faBell} />
                                            <span>Alerts</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/friends'}>
                                        <div className="nav-btn">
                                            <FontAwesomeIcon icon={faUserFriends} />
                                            <span>Friends</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/profile'}>
                                        <div className="nav-btn">
                                            <img src={props.profilePic} alt=""></img>
                                            <span>{props.username}</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                    <Col md={9}>
                        <div className="content">
                            <Switch>
                            <Route exact path='/rivers' component={Rivers} />
                            <Route path='/favorites' component={Favorites} />
                            <Route path='/logs' component={Logs} />
                            <Route path='/alerts' component={Alerts} />
                            <Route path='/friends' component={Friends} />
                            <Route path='/profile' component={Profile} />
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Router>
        
    );
}

export default Navbar;