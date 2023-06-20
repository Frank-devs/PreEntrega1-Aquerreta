import React from 'react';
import '../stylesheets/itemListContainer.css';

function ItemList(prop){

    return(
        <h1>{prop.greeting}</h1>
    );
}

export default ItemList;