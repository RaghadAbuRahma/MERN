import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PlayersList(props) {

    // const [removeFromDom] = props

    const [loaded, setLoaded] = useState(false);
    const [players, setPlayers] = useState([])
    const { id }  = useParams();

    

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[players]);

    const deletePlayer = (id) => {
        axios.delete('http://localhost:8000/api/players/' + id)
        .then(res => {
        props.removeFromDom(id)
        })
        .catch(err => console.error(err));
      }




return (
    <table className="table table-striped">
    <thead>
        <tr>
            <th>Name</th>
            <th>position</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {players.map((player, i) => (
            <tr key={i}>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>
                    {/* <Link to={"/authors/" + author._id + "/edit"} className="btn btn-warning me-2">Edit</Link> */}
                    <button className="btn btn-danger" onClick={() => deletePlayer(player._id)}>Delete</button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
)
}




export default PlayersList