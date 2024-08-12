import React from 'react'
import AuthorForm from '../components/AuthorForm';
import AuthorsList from '../components/AuthorsList';
import { useState , useEffect} from 'react';
import Update from './Update';
import axios from 'axios';
import { useNavigate} from "react-router-dom";

import {
  Routes,
  Route,
  link

} from "react-router-dom";

function Main() {
    const [authors, setAuthors] = useState([])
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();

    const [loaded, setLoaded] = useState(false);
    const removeFromDom = id => {
        setAuthors(authors.filter(author => author._id !== id));
    }
    
    
      const createAuthor = newAuthor => {
        axios.post('http://localhost:8000/api/authors/new',  { name: newAuthor } )
          .then(res=>{
              setAuthors([...authors , res.data])
              navigate('/authors')

            })
              .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            });
            

          }


      
    
    
      useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[authors]);
  return (
    <div>
              <h1>Favorite Author</h1>

        <Routes>
        <Route path={'/authors/new'} element={<AuthorForm onSubmitProp={createAuthor} initialName="" header="Create New Author:" errors={errors}/>} />
        <Route path={'/authors'} element={<AuthorsList removeFromDom={removeFromDom} authors={authors} />} />
          <Route path={'/authors/:id/edit'} element={<Update/>} />
      </Routes>
    </div>
  )
}

export default Main