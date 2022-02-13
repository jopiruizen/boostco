import { makeStyles } from '@mui/styles';

const styles = (theme) => ({

    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FAFAFA',
    },

    content: {
        display: 'flex',
        flexDirection: 'column !important',
        maxWidth: '600px',
        width: '100%',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        padding: '32px',
    },

    notelistContent: {
        width: '100%',
        height: '98vh',
    },
    notelistFooter : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#9A9A9A',
        bottom: 0,
    },

    buttonSpace: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    addNote: {
        width: '100%',
    },

    notesList: {
        display: 'flex',
        flexDirection: 'column !important',
        width: '100%',
        maxHeight: '560px',
    },

    notesListItem: {
        display: 'flex',
        flexDirection: 'column !important',
        width: '100%',
        height: '60px',
    },

    notesListItemTitle: {
        width: '100%',
    },

    notesListItemTags: {
        width: '100%',
    },

    noteInput: {
        width: '560px',
        height: '400px',
    },
});

export default styles;
export const useStyles = makeStyles(styles);
 