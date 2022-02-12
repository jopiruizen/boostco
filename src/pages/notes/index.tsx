import React, { memo } from 'react';

import { compose } from 'redux';
import {
    Grid,
} from '@mui/material';

import useNotes from './useNotes';
import { useStyles } from './styles';


type NotesProps = {

}

function Notes (props: NotesProps) {
    const classes = useStyles();

    const {
        notesList,
    } = useNotes();

    console.log('hello are you rendering me...');

    return (
        <Grid className={classes.page}>
            <Grid className={classes.content}>
                <Grid className={classes.notelistContent}>

                </Grid>
                <Grid className={classes.notelistFooter}>
                    Minimalist Note
                </Grid>
            </Grid>
        </Grid>
    );
}


Notes.propTypes = {

};

Notes.defaultProps = {

};

const enhancers = [
    memo,
];

export default compose(...enhancers)(Notes);
