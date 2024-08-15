import React, { useState } from 'react'
import PlayersList from '../components/PlayersList'
import PlayerForm from '../components/PlayerForm'
import {Link, Route, Routes} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Main() {

    const [players, setPlayers] = useState([]);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    const removeFromDom = id => {
        setPlayers(players.filter(player => player._id !== id));
    }

    const createPlayer = newPlayer => {
        axios.post('http://localhost:8000/api/players/new', newPlayer )
        .then(res => {
            console.log(res.data);
            navigate("/players")
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
return (
    <div>
        <Link to={"/players"}>List</Link>
        || <Link to={"/players/new"}>Add Player</Link>

        <Routes>
            <Route path={"/players"} element={<PlayersList removeFromDom={removeFromDom}/>}></Route>
            <Route path={"/players/new"} element={<PlayerForm errors={errors} onSubmitProp={createPlayer} />}></Route>

        </Routes>
    </div>
    
)
}

export default Main