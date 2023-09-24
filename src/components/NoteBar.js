import React from 'react';
import useStyles from '../styles';

const NoteBar = (props) => {
    const { note, userLogged } = props;
    const { title } = note;
    const classes = useStyles();
    console.log('user logged in', userLogged)

    return (<>
        {userLogged ? (<div className={classes.noteBarContainer}>
            <h5 className={classes.noteBarTitle}>{title}</h5>
        </div>) : (<div className={classes.noteBarContainer}>
            <h5 className={classes.noteBarTitle}>{title}</h5>
        </div>)}</>
    );
};

export default NoteBar;
