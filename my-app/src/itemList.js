import React from 'react';

const ItemList = ({ data, onClickHandler }) => {

    return (
        <ul style={{ listStyle: "none" }}>
            {data.map((item, i) => <li key={item.id} tabIndex={0} style={{ border: 1 }} onClick={() => onClickHandler(item)}>{item.name}</li>)}
        </ul>)
}


export default ItemList