import React, { memo } from 'react';
import { isEmpty } from 'lodash';
import { v4 as uuid } from 'uuid';
import { compose } from 'redux';
import {
    Grid,
    Button,
} from '@mui/material';

import { useStyles } from './styles';
// import Button from '../components/button';

type NotesProps = {
    noteList?: any,
    onOpenInput?: Function,
}

function NoteItem (props:any) {
    const {
        note,
    } = props;
    return (
        <Grid>
            
        </Grid>
    )
}

function Notes (props: NotesProps) {
    const {
        onOpenInput,
        noteList,
    } = props;
    const classes = useStyles();

    function renderList () {
        if (!isEmpty(noteList)) {
            console.log('NOte List: ', noteList);
            return noteList.map((note) =>{
                return (
                    <NoteItem
                        key={uuid()}
                        note={note}
                    />
                );
            });
        }
        return (<React.Fragment></React.Fragment>);
    }

    return (
        <Grid className={classes.content}>
        
            <Grid className={classes.notelistContent}>
                <Grid className={classes.notesList}>
                    { renderList() }
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
