import React from 'react';
import NoteBar from './NoteBar';
import { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

const NoteCard = (props) => {
    const { note, userLogger } = props;
    const { currentauthor, title, text } = note;

    const [userLogged, setUserLogged] = useState(false);
    const [noteText, setNoteText] = useState(text);

    useEffect(() => {
        if (userLogger == currentauthor) {
            setUserLogged(true);
            console.log('User logged in');
        }
    }, [])

    const handleAddNote = async () => {
        try {
            const response = await axiosInstance.post('/api/notes/update', { text: noteText, title: title, currentauthor: currentauthor });
            console.log('editing note');
            console.log('response', response)
            window.location.reload();
        } catch (error) {
            console.error('Error adding note', error);
        }
    };

    const handleDelete = async () => {
        console.log('Deleting note');
        try {
            const response = await axiosInstance.delete('/api/notes/delete', {
                data: { title: title, currentauthor: currentauthor },
            });
            console.log('Response', response);

        } catch (error) {
            console.error('Error deleting note', error);
        }
        window.location.reload();
    };

    return (
        <div className={{ display: 'flex', flexDirection: 'column' }}>
            <NoteBar note={note}></NoteBar>
            <div style={{ width: '370px', alignSelf: 'center' }}>
                {userLogged ? <textarea
                    type="text"
                    placeholder="Enter a new note"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    cols={49}
                    rows={15}
                    style={{ padding: '7px', marginBottom: '20px' }}
                /> : <textarea type="text" style={{ width: '370px', resize: 'none' }} value={text} cols={49} rows={15} ></textarea>
                }
                {userLogged ? <button onClick={() => handleAddNote()}>Save</button> : null}
                {userLogged ? <button onClick={() => handleDelete()}>Delete</button> : null}
            </div >
            <span style={{ alignSelf: 'left', color: 'blue' }}> <i>-By {currentauthor}</i></span>
        </div >
    );
}

export default NoteCard;
