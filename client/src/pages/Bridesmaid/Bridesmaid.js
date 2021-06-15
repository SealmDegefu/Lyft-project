import React, { Component } from 'react'
import Heading from './Heading';
import UserList from '../UserList'
import 'bootstrap/dist/css/bootstrap.min.css';

function Bridesmaid () {
		return (
			<div style={{ maxWidth: "30rem", margin: "4rem auto" }} >
			<Heading />
			<UserList />
			</div>
		)
}

export default Bridesmaid;
