import { InferActionsType } from "../../Alert/alert-reducer"

const SET_NOTES = "SET_NOTES"
const DELETE_NOTE = "DELETE_NOTES"
const SET_LOADING = "SET_LOADING"

export type NoteType = {
    id: string
    title: string
    date: string
}

export const notesInitialState = {
    notes: [] as NoteType[],
    loading:false
}

export type NotesInitialStateType = typeof notesInitialState

export const notesActions = {
    setNotes: (notes: NoteType[]) => ({ type: SET_NOTES, notes } as const),
    deleteNote: (name: string) => ({ type: DELETE_NOTE, name } as const),
    setLoading: (loading: boolean) => ({ type: SET_LOADING, loading } as const)
}
type NotesActionsType = InferActionsType<typeof notesActions>


export const notesReducer = (state: NotesInitialStateType, action: NotesActionsType): NotesInitialStateType => {
    switch (action.type) {
        case SET_NOTES:
            return {
                ...state, notes: action.notes
            }
        case DELETE_NOTE:
            return {
                ...state, notes: state.notes.filter(note => note.id !== action.name)
            }
            case SET_LOADING:
            return {
                ...state, loading:action.loading
            }
        default: return state
    }
}