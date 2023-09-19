import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import axiosInstance from '../axiosInstance';
import NoteCard from '../components/NoteCard';
import NoteBar from '../components/NoteBar';

function Notes() {
    const [notes, setNotes] = useState([]);
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const [currentauthor, setCurrentauthor] = useState(localStorage.getItem('username'));
    const [selected, setSelected] = useState(null);
    const [errorTitle, setErrorTitle] = useState(null);
    const [errorText, setErrorText] = useState(null);
    useEffect(() => {
        async function fetchNotes() {
            try {
                const response = await axiosInstance.get('/api/notes/getNotes');
                setNotes(response.data);
            } catch (error) {
                console.error('Error fetching notes', error);
            }
        }
        fetchNotes();
        console.log(localStorage.getItem('pageReloaded'));
        if (localStorage.getItem('pageReloaded') == 'false') {
            localStorage.setItem('pageReloaded', 'true');
            window.location.reload();
        }

    }, []);

    const validateData = (text, title) => {
        let noErrors = 0;
        if (text.length < 15) setErrorText('Text should be at least 15 characters')
        else { setErrorText(null); noErrors++; }
        if (title.length < 5) setErrorTitle('Title should be at least 5 characters')
        else { setErrorTitle(null); noErrors++; }
        if (noErrors == 2) return true;
    }
    const handleAddNote = async (text, title) => {
        if (validateData(text, title)) {
            try {
                const response = await axiosInstance.post('/api/notes/create', { text: noteText, title: noteTitle, currentauthor: currentauthor });

                setNotes([...notes, response.data]);
                setNoteText('');
                setNoteTitle('');
                window.location.reload();
            } catch (error) {
                console.error('Error adding note', error);
            }
        }
    };


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', justifyContent: 'space-evenly', }}>
                <input type="text" placeholder="Note title ..." value={noteTitle} style={{ width: '370px', padding: '7px', marginTop: '20px' }} onChange={(e) => setNoteTitle(e.target.value)}
                ></input>
                {errorTitle ? <h5 style={{ color: 'red' }}>{errorTitle}</h5> : null}
                <textarea
                    placeholder="Enter a new note"
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    cols={49}
                    rows={15}
                    style={{ padding: '7px', marginTop: '20px' }}
                />
                {errorText ? <h5 style={{ color: 'red' }}>{errorText}</h5> : null}
                <button onClick={() => handleAddNote(noteText, noteTitle)}>Add Note</button>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                {notes.map((note, index) => (
                    <li key={index} onClick={() => { setSelected(index) }} style={{ width: '55%', marginTop: '20px' }}>
                        {selected == index ? <NoteCard note={note} userLogger={currentauthor}></NoteCard> : <NoteBar note={note}></NoteBar>}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Notes;
