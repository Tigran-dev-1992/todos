import axios, { } from "axios"
import { NoteDataType } from "../Components/Hompage/Notes/NoteForm"


const url = "https://todolist-fab4e-default-rtdb.firebaseio.com/"


type GetDataType = {
    [keys: string]: {
        title: string
        date: string
    }
}
type PostDataType = {
    name: string
}

export const notesApi = {
    getNotesData() {
        return axios.get<GetDataType>(`${url}/notes.json`)
            .then((res) => {
               return res
            }
            )
    },
    addNewNote(note: NoteDataType) {
      return  axios.post<PostDataType>(`${url}/notes.json`, note)
            .then(res => {
                return res
            })
    },
    deleteNote(id: string) {
      return  axios.delete(`${url}/notes/${id}.json`)
            .then(res => {
                return res
            })
    }
}
