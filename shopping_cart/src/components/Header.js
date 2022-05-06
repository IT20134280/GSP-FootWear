import { Navbar, Container, Dropdown, Badge, Nav } from "react-bootstrap";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import CartContext from "../context/mycart/CartContext";
import { useContext } from "react";

const Header = () => {
  const {cartItems} = useContext(CartContext);
    return (
      <Navbar bg="dark" color="inherit"  style={{height:75}} >
          <Container>
            <Navbar.Brand>
            <Link to="/"> Shopping Cart</Link>
            </Navbar.Brand>
            <Nav>
              <Dropdown alignRight>
                <Dropdown.Toggle>
                  <HiShoppingCart   fontsize="24px"/> 
                <Badge>My Cart</Badge>
               
                </Dropdown.Toggle>
                {cartItems.length > 0 && (
                  <div>
                    <span>{cartItems.length}</span>
                  </div>
                )}
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
