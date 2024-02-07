import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Actions/AuthActions';

const NavUser=()=>{

  const token = localStorage.getItem('token')
  const user = useSelector(state => state.AuthReducer.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
    return(
        <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Auth</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {
              token && user ?

              <>
                <Nav.Link as={Link} to="/Profil">Profil</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
              </>
              :
              <>
                <Nav.Link as={Link} to="/Register">Register</Nav.Link>
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
              </>
            }



            
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavUser