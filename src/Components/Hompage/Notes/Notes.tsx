import React from "react"
import {  TransitionGroup,CSSTransition } from "react-transition-group"
import Note from "./Note"
import { NoteType } from "./notes-reducer"



type PropsType = {
    notes: NoteType[]
    deleteNode: (id: string) => Promise<void>
}
const Notes: React.FC<PropsType> = ({ notes, deleteNode }) => {
    return (
        <div className="mt-2">
            <TransitionGroup component="ul" className="list-group">
                {notes.map(note => {
                    return (
                        <CSSTransition timeout={800}  key={note.id} classNames={'note'}>
                            <li className="list-group-item mt-2" > <Note note={note} deleteNode={deleteNode} /></li>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </div>
    )
}


export default Notes


