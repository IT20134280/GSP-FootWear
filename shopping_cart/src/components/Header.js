import { Navbar, Container, Dropdown, Badge, Nav } from "react-bootstrap";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <Navbar bg="dark" color="inherit"  style={{height:75}} >
          <Container>
            <Navbar.Brand>
            <Link to="/"> Shopping Cart</Link>
            </Navbar.Brand>
            <Nav>
              <Dropdown alignRight>
                <Dropdown.Toggle>
                  <HiShoppingCart color="white" fontsize="24px"/> 
                <Badge>My Cart</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{width:100}} >
                  <span >Shopping Cart Empty!</span>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
      </Navbar>  
       
      
    );
};
export default Header;
