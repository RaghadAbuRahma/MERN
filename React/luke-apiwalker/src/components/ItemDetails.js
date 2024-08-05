import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetails() {
    const { resourceType, id } = useParams();
    const [item, setItem] = useState(null);

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

    // Only render the item when it has been fetched and setItem has been called
    if (!item) {
        return <div>Loading...</div>;
    }
    else if (item.name || item.title == null){
        return "item not found"
    }
        
    

    return (
        <div>
            <h1>{item.name || item.title}</h1>
            
        </div>
    );
}

export default ItemDetails;


