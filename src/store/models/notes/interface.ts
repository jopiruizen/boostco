

export interface Note {
    id: string,
    title: string,
    tags: string,
    content: string,
    dateCreated: Number,
    dateModified: Number,
}

export interface NotesList {
    list: { [key: string]: Note; } | {},
    dateCreated: Number,
    dateModified: Number,
}

export interface NotesState {
    noteDetails: Note;
    notesList: NotesList,
    isLoading: boolean,
}


export function newNote (obj:any): Note {
    const n:Note = {
        ...obj,
    };
    return n;
}

export function newNoteList (obj:any): NotesList {
    const nl:NotesList = {
        ...obj,
    };
    return nl;
}