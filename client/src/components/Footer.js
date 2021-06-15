import React from 'react'

const Footer = () => {
	const style ={
	color: "rgb(212,175,55)",
	marginTop: "0.5rem",
    padding: "0.5rem",
    backgroundColor: "#F8F8F8",
    position: "fixed",
    fontSize: "15px",
    bottom: "0",
    left: "0",
    width: "100%",
    textAlign: "center",
	
	  }

	return (
		<div style={style}>
		<p> Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.</p>
			<p style={{fontSize: "12px"}}>
              &copy;{new Date().getFullYear()} Bridezilla | All rights reserved |
              Terms Of Service | Privacy 
            </p>
		</div>
	)
}

export default Footer
