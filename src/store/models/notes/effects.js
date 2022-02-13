/*
 * Rematch is Redux best practices without the boilerplate.
 * See rematch -> https://rematchjs.org/docs/getting-started/installation
 * Note: In rematch, effects is the place to handle async actions, like making API Calls.
 * Effects will be attached at the store during the call to rematch.init
 * 
 * Note: To Have a seperate effects file, use javascript because type script is not able to capture the context/scope of the owning objects of the effects.
 * But for the safe of clean code / clean architecture, effects file should be on a separate file.
 * 
 */

import {
    getList,
} from './api';


import { logInfo } from '../../../utils/logs';

import { dispatch } from '../..';
 

export async function getNotesList() {
    logInfo('getNotesList()...');
    this.setIsLoading(true);
    const listData = await getList();
    logInfo('List Data: ', listData);
    const list = Object.values(listData.list);
    logInfo('List : ', list);
    this.setNotesList(list);
}

export async function getNoteDetails(id) {

}

export async function upsertNote (note) {

}

