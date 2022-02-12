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
    }
});

export default styles;
export const useStyles = makeStyles(styles);
 