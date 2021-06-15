import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState'
import { ListGroup, ListGroupItem, Button} from 'reactstrap'


const UserList = () => {
	const { users, removeUser } = useContext(GlobalContext);
	return (
		<ListGroup className="mt-4" style={{margin: "0px"}}>
		{users.map(user => (
			<ListGroupItem>
			<strong style={{marginBottom: "0px", color: "rgb(212,175,55)"}}>{user.name}</strong>
			<div className="ml-auto">
				<button onClick={() => removeUser(user.id)} style={{float: "right", backgroundColor: "rgb(212,175,55)", color: "white", border: "none", padding: "10px"}} >Delete</button>
			</div>
			</ListGroupItem>
		))}
		</ListGroup>
	)
}

export default UserList
