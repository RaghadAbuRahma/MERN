import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setFisrtname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState(""); 

    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        setFisrtname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    
        // create a javascript object to hold all of the values
        const newUser = { 
            firstname: firstname, 
            lastname: lastname,
            email: email, 
            password: password,
            confirmPassword: confirmPassword
        };
        props.setUser(newUser);
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFisrtname(e.target.value) } value={ firstname }/>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } value={ lastname } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password }/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword }/>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
