import axios from "axios";
import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";
import { useNavigate } from "react-router-dom";

function Update() {

    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();



useEffect(() => {
    axios.get('http://localhost:8000/api/authors/' +  id )
        .then(res => {
            setAuthor(res.data);
            console.log(res.data)
            setLoaded(true);
        })
        .catch(err => {
            console.error("Error fetching data:", err);
            setError("Author not found. Please check the URL or try again.");
            setLoaded(true); // To stop the loading state
        });
    },[])

    const updateAuthor = (updatedName) => {
        axios.patch('http://localhost:8000/api/authors/' + id + "/edit", { name: updatedName })
            .then(res =>{
                console.log("Author updated successfully:", res)
                navigate('/authors')

            })

            .catch(err=>{
                // console.log(err.response.data.errors.name.message)
                 const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                 const errorArr = []; // Define a temp error array to push the messages in
                 for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                 // Set Errors
                setErrors(errorArr);
            });
    };


return (
    <div>
        <h3>Update author</h3>
        {loaded && (

    <AuthorForm onSubmitProp={updateAuthor} initialName={author.name}  errors={errors}/>
)}
{!loaded && <p>Loading...</p>} 
    </div>)
}

export default Update






