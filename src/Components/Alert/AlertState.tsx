import React, { useReducer } from 'react'
import { alertActions, alertInitialState, AlertInitialStateType, alertReducer } from './alert-reducer'
import { AlertContext } from './AlertContext'


export const AlertState: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(alertReducer, alertInitialState)
    const show = (payload: AlertInitialStateType) => (dispatch(alertActions.showAlert(payload)))
    const hide = () => (dispatch(alertActions.hideAlert()))
    return (
        <AlertContext.Provider value={{...state, show, hide }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState