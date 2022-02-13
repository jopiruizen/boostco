import React, { memo } from 'react';

import { compose } from 'redux';
import {
    Grid,
    Button,
} from '@mui/material';

import { useStyles } from './styles';
// import Button from '../components/button';

type NotesProps = {
    onOpenInput?: Function,
}

function Notes (props: NotesProps) {
    const {
        onOpenInput,
    } = props;
    const classes = useStyles();
    return (
        <Grid className={classes.content}>
        
            <Grid className={classes.notelistContent}>
                <Grid className={classes.notesList}>

                </Grid>
                <Grid className={classes.buttonSpace}>
                    <Button
                        id='addNoteBtn'
                        variant='outlined'
                        className={classes.addNote}
                        onClick={() => {
                            if (typeof onOpenInput === 'function') {
                                onOpenInput();
                            }
                        }}
                    >
                        Add Note
                    </Button>
                </Grid>
            </Grid>

            <Grid className={classes.notelistFooter}>
                Minimalist Note
            </Grid>
        </Grid>
    );
}

export default Notes;
