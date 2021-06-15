import React from 'react'
import { Link } from 'react-router-dom';
import {
	Navbar, 
	Nav,
	NavItem,
	NavbarBrand, 
	Container
} from 'reactstrap';

const Heading = () => {
	return (
		<Navbar style={{marginTop: "50px"}} color="light">
		<Container>
		<NavbarBrand href="/bridesmaid" style={{color: "rgb(212,175,55)", fontFamily: "Permanent Marker, cursive"}}> My Team </NavbarBrand>
		<Nav>
			<NavItem>
				<Link className="btn btn-primary" to="/add" style={{color: "white", backgroundColor: "rgb(212,175,55)", fontFamily: "Permanent Marker, cursive"}}>Add Bridesmaid</Link>
			</NavItem>
		</Nav>
		</Container>
			</Navbar>
	)
}

export default Heading
