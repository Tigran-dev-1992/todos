import React, { useContext } from "react"
import { AlertContext } from "../../Alert/AlertContext"
import { NoteType } from "./notes-reducer"

type PropsType = {
    note: NoteType
    deleteNode: (id: string) => Promise<void>
}

const Note: React.FC<PropsType> = ({ note, deleteNode }) => {
    const alert = useContext(AlertContext)

    const handlerClick = () => {
        deleteNode(note.id)
        alert?.show({ alertText: "You delete  note succsess!!!", alertType: "success", visible: true })
    }
    return (
        <div className="note d-flex justify-content-between align-items-center">
            <div className="note__title">
                <b> {note.title}</b>
                <small className="ml-4"> {new Date().toDateString()}</small>
            </div>
            <div>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={handlerClick}>&times;</button>
            </div>
        </div>
    )
}


export default Note