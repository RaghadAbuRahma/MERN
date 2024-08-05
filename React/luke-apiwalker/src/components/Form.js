import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const [selectedResource, setSelectedResource] = useState('');
    const [resourceTypes, setResourceTypes] = useState([]);
    const [id, setID] = useState('');
    const navigate = useNavigate();

    const fetchResources = () => {
        fetch('https://swapi.dev/api/')
            .then(response => response.json())
            .then(data => {
                setResourceTypes(Object.keys(data));
            })
            .catch(err => {
                console.log(err);
            });
    };



    useEffect(() => {
        fetchResources();
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${selectedResource}/${id}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={selectedResource} onChange={e => setSelectedResource(e.target.value)}>
                    <option value="">Select a resource</option>
                    {resourceTypes.map((resource, index) => (
                        <option key={index} value={resource}>
                            {resource}
                        </option>
                    ))}
                </select>
                <input type="text" placeholder="ID" value={id} onChange={e => setID(e.target.value)}/>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}







