import React, { memo } from 'react';

import { compose } from 'redux';
import {
    Grid,
} from '@mui/material';

import useNotes from './useNotes';
import useNoteInput from './useNoteInput';
import { useStyles } from './styles';

import Notes from './notes';

type NotesWrapperProps = {

}

function NotesWrapper (props: NotesWrapperProps) {
    const classes = useStyles();

    const {
        notesList,
    } = useNotes();

    const {
        renderNoteInput,
        openNoteInput,
    } = useNoteInput();

    console.log('hello are you rendering me...');

    return (
        <React.Fragment>
            <Grid className={classes.page}>
                <Notes
                    noteList={notesList}
                    onOpenInput={() => openNoteInput()}
                />
            </Grid>
            { renderNoteInput() }
        </React.Fragment>  
    );
}

const enhancers = [
    memo,
];

export default compose(...enhancers)(NotesWrapper);
