import React from 'react';

const Table = (props) =>{

    return(
        <tr>     
            <td>{props.type}</td>
            <td>{props.abilities}</td>
        </tr>
    );
}

export default Table;