import React from 'react'

const DisplayInfo = (props) => {
    const {user} = props;
    const {firstname, lastname, email, password,confirmPassword} = user;
  return (
    <>
        <h2>First Name: {firstname}</h2> 
        <h2>Last Name: {lastname}</h2> 
        <h2>Email Address: {email}</h2>
        <h2>Password: {password}</h2>
        <h2>Confirm Password: {confirmPassword}</h2>
    </>
  )
}

export default DisplayInfo