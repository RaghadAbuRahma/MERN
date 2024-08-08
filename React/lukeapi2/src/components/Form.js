import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Form(props) {
    const [categories, setCategories] = useState([])
    const [ID, setID] = useState(1)
    const [category, setCategory] = useState("people")
    const navigate = useNavigate();
    const [newData, setNewData] = useState({})
    const [error, setError] = useState(null);




    useEffect(()=> {
        axios.get('https://swapi.dev/api/').then(response=>{
    setCategories(Object.keys(response.data))
    } ,[]) })

    useEffect(()=> {
        axios.get(`https://swapi.dev/api/${category}/${ID}/`).then(response=>{
        console.log(response.data)
        setNewData(response.data)

} )
.catch (error=>{
    setNewData("")
    console.log("not found")
    
    }) 

},[category, ID]) 




const handleSubmit = (e) => {
    e.preventDefault();
    props.datafromform(newData)

    navigate(`/${category}/${ID}`);







}

return (
    <div>

        <form onSubmit={handleSubmit}>
            <select onChange={e => setCategory(e.target.value)}>
            <option value="">Select a resource</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
            </select>
            <label htmlFor="id">ID</label>
            <input type="number" name="id" onChange={e => setID(e.target.value)}></input>
            <button>Search</button>
        </form>

    </div>
)
}

export default Form