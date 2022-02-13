import React, { useEffect, useState } from 'react';
import NoteInput from './noteInput';

function useNoteInput () {

    const [open, setOpen] = useState(false);

    function openNoteInput () {
        console.log('Open Note Input()');
        setOpen(true);
    }

    function renderNoteInput () {
        return (
            <NoteInput 
                open={open}
            />
        );
    }
    return {
        openNoteInput,
        renderNoteInput,
    }
}

export default useNoteInput;
