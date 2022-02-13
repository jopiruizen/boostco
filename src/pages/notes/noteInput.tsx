import React, { useEffect, useState } from 'react';
import DialogWrapper from '../components/dialog';
import {
    Grid,
} from '@mui/material';

import { useStyles } from './styles';

type NoteInputProps = {
    open?: boolean,
}

function NoteInput (props:NoteInputProps) {
    const classes = useStyles();
    const {
        open,
    } = props;

    const [noteOpen, setNoteOpen] = useState(open);

    useEffect(() => {
        console.log('Note Open: ', noteOpen);
    },[]);

    useEffect(() => {
        console.log('NoteInput.useEFfect(open)', open);
        setNoteOpen(open);
    }, [open])

    function handleClose () {
        setNoteOpen(false);
    }

    return (
        <DialogWrapper
            open={noteOpen}
            onClose={() => handleClose()}
        >
            <Grid className={classes.noteInput}>

            </Grid>
        </DialogWrapper>
    );
}

export default NoteInput;