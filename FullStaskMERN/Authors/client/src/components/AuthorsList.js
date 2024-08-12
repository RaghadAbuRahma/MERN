import React from 'react'
import axios from 'axios';
import { useParams } from "react-router"; 
import { Link } from 'react-router-dom';

function AuthorsList(props) {

  const { id }  = useParams();



  const deleteAuthor = (id) => {
    axios.delete('http://localhost:8000/api/authors/' + id)
    .then(res => {
        props.removeFromDom(id)
    })
    .catch(err => console.error(err));
  }






  return (
    <div>
    <Link to={"/authors/new"} className="btn btn-primary mb-3">Create New Author</Link>
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.authors.map((author, i) => (
                <tr key={i}>
                    <td>{author.name}</td>
                    <td>
                        <Link to={"/authors/" + author._id + "/edit"} className="btn btn-warning me-2">Edit</Link>
                        <button className="btn btn-danger" onClick={() => deleteAuthor(author._id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>


  )
}

export default AuthorsList