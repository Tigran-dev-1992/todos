import React, { useContext, useEffect } from 'react'
import Alert from '../Alert/Alert'
import Notes from './Notes/Notes'
import NoteForm from './Notes/NoteForm'
import { NotesContext } from './Notes/NotesContext'
import { Preloader } from '../Commons/Preloader'
import { Empty } from './Notes/Empty'

const HomePage = () => {
    useEffect(() => {
        getNotes()
    }, [])
    const notesInfo = useContext(NotesContext)
    if (!notesInfo) {
        return null
    }
    const { loading, notes, getNotes, addNote, deleteNote } = { ...notesInfo }
    return (
        <div>
            <Alert />
           {notes&&notes.length
                    ? <Notes notes={notes} deleteNode={deleteNote} />
                    : <Empty/>
            }
             <NoteForm addNote={addNote} />
            {loading&&<Preloader/>}

        </div>
    )
}
export default HomePage