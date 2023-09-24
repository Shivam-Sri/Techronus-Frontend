import React, { useEffect, useState } from 'react';
import useStyles from '../styles';
import axiosInstance from '../axiosInstance';
import NoteBar from './NoteBar';

const NoteCard = (props) => {
    const { note, userLogger } = props;
    const { currentauthor, title, text } = note;
    const classes = useStyles(); // Initialize your custom styles

    const [userLogged, setUserLogged] = useState(false);
    const [noteText, setNoteText] = useState(text);

    useEffect(() => {
        if (userLogger === currentauthor) {
            setUserLogged(true);
            console.log('User logged in');
        }
    }, []);

    const handleAddNote = async () => {
        try {
            const response = await axiosInstance.post('/api/notes/update', {
                text: noteText,
                title: title,
                currentauthor: currentauthor,
            });
            console.log('Editing note');
            console.log('Response', response);
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
        <div className={classes.noteCardContainer}>
            <NoteBar note={note} />
            <div>
                {userLogged ? (
                    <textarea
                        type="text"
                        placeholder="Enter a new note"
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        cols={49}
                        rows={15}
                        className={classes.noteTextArea}
                    />
                ) : (
                    <textarea
                        type="text"
                        value={text}
                        cols={49}
                        rows={15}
                        className={classes.noteTextArea}
                    ></textarea>
                )}
                {userLogged ? (
                    <div className={classes.noteCardButtons}>
                        <button className={classes.noteCardButton} onClick={handleAddNote}>
                            Save
                        </button>
                        <button className={classes.noteCardButton} onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                ) : null}
            </div>
            <span className={classes.noteAuthor}> <i>-By {currentauthor}</i></span>
        </div>
    );
};

export default NoteCard;
