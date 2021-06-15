import React, { useState, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuuid } from 'uuid'
import {
	Form, 
	FormGroup,
	Label, 
	Input,
	Button
} from 'reactstrap'

const AddUser = () => {
	const { addUser } = useContext(GlobalContext);
	const history = useHistory();
	const [name, setName] = useState("")
	const onSubmit = () =>{
		const newUser = {
			id: uuuid(),
			name
		}
		addUser(newUser);
		history.push('/bridesmaid');
	}

	const onChange = (e) =>{
		setName(e.target.value);
	}
	return (
		<Form style={{ maxWidth: "30rem", margin: "4rem auto" }} onSubmit={onSubmit}>
			<FormGroup>
				<Label style={{color: "rgb(212,175,55)", fontFamily: "Permanent Marker, cursive", fontSize: "20px"}} >Name</Label>
				<Input type="text" value={name} onChange={onChange} style={{color: "rgb(212,175,55)", fontFamily: "Permanent Marker, cursive"}} placeholder="Enter Name"></Input>
			</FormGroup>
			<Button style={{color: "rgb(212,175,55)", backgroundColor: "white", border: "none", marginRight: "5px"}} type="submit">Submit</Button>
			<Link to="/" className="btn btn-danger ml-2" style={{color: "white", backgroundColor: "rgb(212,175,55)", border: "none"}} >Cancel</Link>
		</Form>
	)
}

export default AddUser;