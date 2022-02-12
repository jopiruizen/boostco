import {v4 as uuid } from 'uuid';
import axios from 'axios';
import { logInfo } from '../../../utils/logs';

import { Note, NotesList, newNote, newNoteList } from './interface';

const NameSpaces = {
    NOTES_LIST: 'notes-lists',
    NOTE_DETAILS : 'note-',
}


export async function getList () {
    const NAME_SPACE = NameSpaces.NOTES_LIST
    const now = new Date().getTime();
    const listData = localStorage.getItem(NAME_SPACE);
  
    if (!listData) {
        const newData: NotesList = {
            dateCreated: now,
            dateModified: now,
            list: {},
        };
        localStorage.setItem(NAME_SPACE, JSON.stringify(newData));
        return newData;
    }
    return JSON.parse(listData);
}

export async function upsertList (listdata:NotesList) {
    const NAME_SPACE = NameSpaces.NOTES_LIST;
    const now = new Date().getTime();

    let store = localStorage.getItem(NAME_SPACE);

    if (store) {
        store = JSON.parse(store);
        const newList = newNoteList(store);
        newList.dateModified = now;
        newList.list = listdata.list;
        localStorage.setItem(NAME_SPACE, JSON.stringify(newList));
     } else {
         const newStore = {
             list: listdata.list,
             dateCreated: now,
             dateModified: now,
         };
         localStorage.setItem(NAME_SPACE, JSON.stringify(newStore));
     }
}


export async function upsertNote (note:Note) {
    const NAME_SPACE = NameSpaces.NOTE_DETAILS + note.id;
    const now = new Date().getTime();

    let details = localStorage.getItem(NAME_SPACE);

    if (details) {
       details = JSON.parse(details)
        const n = newNote(details);
        localStorage.setItem(NAME_SPACE, JSON.stringify(n));
    } else {
        const n = {
            ...note,
            dateCreated: now,
            dateModified: now,
        };
        localStorage.setItem(NAME_SPACE, JSON.stringify(n));
    }
}

export async function upsertToList (note:Note) {
    const listData = await getList();
    listData.list[note.id] = note;
    upsertList(listData);
}

export  async function createNote (note:Note) {
    const newNote = {
        ...note,
        id: uuid(),
    };
    upsertNote(newNote);
    upsertToList(newNote);
}

export async function updateNote (note) {
    upsertNote(note);
    upsertToList(note);
}

export async function getClientInfo () {
    const res = await axios.get('https://ipapi.co/json/');
    logInfo('getClientInfo() : ', res.data);
    return res.data;
}
