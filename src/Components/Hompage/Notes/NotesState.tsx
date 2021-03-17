import React, { useReducer } from 'react'
import { notesApi } from '../../../Api/api'
import { NoteDataType } from './NoteForm'
import { notesActions, notesInitialState, notesReducer} from './notes-reducer'
import { NotesContext } from './NotesContext'



export const NotesState: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(notesReducer, notesInitialState)
    const getNotes = async () => {
        dispatch(notesActions.setLoading(true))
        const res = await notesApi.getNotesData()
        if (res.statusText === "OK") {
            let notes = res.data && Object.keys(res.data).map((key, i) => {
                return {
                    ...res.data[key],
                    id: key
                }
            })
            dispatch(notesActions.setNotes(notes))
            dispatch(notesActions.setLoading(false))
        }

    }
    const addNote = async (note: NoteDataType) => {
        dispatch(notesActions.setLoading(true))
        const res = await notesApi.addNewNote(note)
        if (res.statusText === "OK") {
            getNotes()
            dispatch(notesActions.setLoading(false))
        }
    }
    const deleteNote = async (id: string) => {
        dispatch(notesActions.setLoading(true))
        const res = await notesApi.deleteNote(id)
        if (res.statusText === "OK") {
            dispatch(notesActions.deleteNote(id))
            dispatch(notesActions.setLoading(false))
        }
    }
    return (
        <NotesContext.Provider value={{ ...state, getNotes, addNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    )
}