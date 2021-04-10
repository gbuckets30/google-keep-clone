import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

    function handleButtonClick() {
        props.deleteNote(props.id);
    }
    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleButtonClick}><DeleteIcon /></button>
        </div>
    );
}

export default Note;