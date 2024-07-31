import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length === 0) {
            setFirstNameError("First name is required!");
        }
        else if(e.target.value.length < 2) {
            setFirstNameError("Field must be at least 2 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length === 0) {
            setLastNameError("last name is required!");
        }
        else if(e.target.value.length < 2) {
            setLastNameError("Field must be at least 2 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Field must be at least 5 characters!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }

    const handlePassword= (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("The password must be at least 8 characters.");
        } else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }
    }

        const handleConfirmPassword = (e) => {
            setConfirmPassword(e.target.value);
            if(e.target.value  !== password){
                setConfirmPasswordError("Passwords doesn't match");
            } else {
                // an empty string is considered a "falsy" value
                setConfirmPasswordError("");
            }



    }









    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        setFirstname("");
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
            <h1>User Form</h1>
            <div class="form-group">
                <label>First Name: </label> 
                <input type="text" class="form-control" onChange={ handleFirstName } value={firstname}/>
                {
                    firstNameError ?
                    <p class="text-danger">{ firstNameError } </p> :
                    ''
                }
            </div>
         
            <div class="form-group">
                <label>Last Name: </label> 
                <input type="text" class="form-control" onChange={ handleLastName } value={lastname}/>
                {
                    lastNameError ?
                    <p class="text-danger">{ lastNameError }</p> :
                    ''
                }
            </div>
            <div class="form-group">
                <label>Email Address: </label> 
                <input type="text" class="form-control" onChange={ handleEmail } value={ email } />
                {
                    emailError ?
                    <p class="text-danger">{ emailError }</p> :
                    ''
                }
            </div>
            <div class="form-group">
                <label>Password: </label>
                <input type="text" class="form-control" onChange={ handlePassword } value={ password }/>
                {
                    passwordError ?
                    <p class="text-danger">{ passwordError }</p> :
                    ''
                }

            </div>
            <div class="form-group">
                <label>Confirm Password: </label>
                <input type="text" class="form-control" onChange={ handleConfirmPassword } value={ confirmPassword }/>
                {
                    confirmPasswordError ?
                    <p class="text-danger">{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            {
                firstNameError || lastNameError || emailError || passwordError || confirmPasswordError ?
                <input type="submit" value="Create user" disabled /> : 
                <input type="submit" value="Create user" />
            }

        </form>
    );
};
    
export default UserForm;
