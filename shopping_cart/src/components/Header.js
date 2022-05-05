import { Navbar, Container, Dropdown, Badge, Nav } from "react-bootstrap";
 

const Header = () => {
    return (
      <Navbar bg="dark" color="inherit"  style={{height:75}} >
          <Container>
            <h1> Shopping Cart</h1>
            <Nav>
              <Dropdown alignRight>
                <Dropdown.Toggle>
                <Badge>{8}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu  >
                  <span>Shopping Cart is Empty!</span>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
      </Navbar>  
       
      
    );
};
export default Header;
