import React, { useContext, useState } from "react"
import { AlertContext } from "../../Alert/AlertContext"

export type NoteDataType = {
    title: string
    data: string
}
type PropsType = {
    addNote: (note: NoteDataType) => Promise<void>
}

const NoteForm: React.FC<PropsType> = ({ addNote }) => {
    const [inputValue, setInputValue] = useState("")
    const alert = useContext(AlertContext)


    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (inputValue.trim()) {
            e.preventDefault()
            addNote({ title: inputValue, data: new Date().toLocaleString() })
            alert?.show({ alertText: "You created  note succsess!!!", alertType: "success", visible: true })
            setInputValue("")
        }
        else{
            e.preventDefault()
            alert?.show({ alertText: "Enter note title please!!!", alertType: "danger", visible: true })
        }
    }


    return (
        <div className="form">
            <form onSubmit={handlerSubmit}>
                <input type="text" className="form-control p-4 mt-4" placeholder="Enter note name" value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} />
                    <button className="btn btn-primary btn-add mt-4 p-2">Add Note</button>
            </form>
        </div>
    )
}


export default NoteForm