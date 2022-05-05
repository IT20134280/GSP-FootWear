import { Navbar, Container, Dropdown, Badge, Nav } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const Header = () => {
    return (
      <Navbar bg="dark" color="inherit"  style={{height:75}} >
          <Container>
            <h1> Shopping Cart</h1>
            <Nav>
              <Dropdown alignRight>
                <Badge>{8}</Badge>
                <DropdownMenu>
                  <span>Empty!</span>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Container>
      </Navbar>  
       
      
    );
};
export default Header;
