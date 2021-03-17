import { createContext } from "react";
import { NoteDataType } from "./NoteForm";
import { NotesInitialStateType} from "./notes-reducer";

type NotesFunctionsType = {
    getNotes: () => Promise<void>
    addNote: (note: NoteDataType) => Promise<void>
    deleteNote: (id:string) => Promise<void>
}

type NotesContextValueType = NotesFunctionsType&NotesInitialStateType|null

export const NotesContext = createContext<NotesContextValueType>({} as NotesContextValueType)