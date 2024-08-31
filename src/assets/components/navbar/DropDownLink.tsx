import './navbar.css';
import { NavDropdown } from 'react-bootstrap';

interface DropdownProps {
  title: string;
  item1: string;
  item2: string;
  item3: string;
}

export default function DropDownLink({ title, item1, item2, item3 }: DropdownProps) {
  return (
    <div className="custom-dropdown">
      <NavDropdown title={title} id="basic-nav-dropdown" renderMenuOnMount={true}>
        <div className="custom-menu d-flex">
          
        <NavDropdown.Item href="#action/3.1" className="w-100">{item1}
        
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">{item2}</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">{item3}</NavDropdown.Item>
        </div>
      </NavDropdown>
    </div>
  );
}

