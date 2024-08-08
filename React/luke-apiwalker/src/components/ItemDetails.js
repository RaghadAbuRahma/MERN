import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetails() {
    const { resourceType, id } = useParams();
    const [item, setItem] = useState("");

    const fetchItem = () => {
        fetch(`https://swapi.dev/api/${resourceType}/${id}/`)
            .then(response => response.json())
            .then(data => {
                setItem(data);
            });
    };

    useEffect(() => {
        fetchItem();
    }, [resourceType, id]);

    if (!item) {
        return <div>Loading...</div>;
    }
    // else if (item.name || item.title == null){
    //     return "item not found"
    // }
    return (
        <div>
            {Object.keys(item).slice(0,4).map((key, i) => 
                <li key={i} ><h4>{key}</h4>{item[key]}</li>)}
            
        </div>
    );
}

export default ItemDetails;


