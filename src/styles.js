import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    '@media (min-width: 300px)': {
        appContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: '200px',
            marginRight: '200px',
        },
        image: {
            height: 100,
            width: 90,
        },
        emailContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#1a76d2',
            color: 'white',
            borderRadius: '20px',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '5px',
        },
        emailText: {
            fontSize: '1.2rem',
            marginBottom: '8px',
        },
        logoutButton: {
            background: 'red',
            color: 'white',
            borderRadius: '20px',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '5px',
            cursor: 'pointer',
        },
        noteBarContainer: {
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid black',
            borderRadius: '20px',
            backgroundColor: '#d5f4e7',
            color: '#444654',
            cursor: 'pointer',
            boxShadow: '3px 5px 9px #74aa9c',
        },
        noteBarTitle: {
            alignSelf: 'center',
        },
        noteCardContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        noteTextArea: {
            width: 'auto',
            alignSelf: 'center',
            backgroundColor: '#74aa9c',
            color: 'white',
            padding: '20px',
            marginBottom: '20px',
            borderRadius: '20px'
        },
        noteCardButtons: {
            display: 'flex',
            justifyContent: 'center',
        },
        noteCardButton: {
            margin: '0 10px',
        },
        noteAuthor: {
            alignSelf: 'left',
            color: 'blue',
        },
    },
    '@media (max-width: 768px)': {
        noteTextArea: {
            width: '300px',
            alignSelf: 'center',
            padding: '20px',
            marginBottom: '20px',
        },
    },
    '@media (max-width: 600px)': {
        noteTextArea: {
            width: '300px',
            alignSelf: 'center',
            padding: '20px',
            marginBottom: '20px',
        },
    },
    '@media (max-width: 650px)': {
        appContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginLeft: '200px',
            marginRight: '200px',
        },
    },
}
))

export default useStyles;