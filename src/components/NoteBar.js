import React from 'react';

const NoteBar = (props) => {
    const { note } = props;
    const { currentauthor, title, text } = note;
    return (
        <div style={{ border: '1px solid black', borderRadius: '20px', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
            <h5 style={{ justifyContent: 'center', alignSelf: 'center' }}>{title}</h5>
        </div>
    );
}

export default NoteBar;
