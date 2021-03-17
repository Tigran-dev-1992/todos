import { createContext } from "react";
import { AlertInitialStateType } from "./alert-reducer";

type AlertFunctionsType = {
    show: (payload: { alertText: string; alertType: string; visible: boolean }) => void
    hide: () => void
}
export type AlertContextValueType = AlertFunctionsType & AlertInitialStateType | null

export const AlertContext = createContext<AlertContextValueType>(null)