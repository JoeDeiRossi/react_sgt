
import React from 'react';

export default props => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.course}</td>
            <td>{props.grade}</td>
            <td>
                <button className="btn btn-floating red darken-2" onClick={() => {props.delete(props.id)}}>
                    <i className="material-icons">delete</i>
                </button>
            </td>
        </tr>
    );
}
