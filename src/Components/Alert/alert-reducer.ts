const SHOW_ALERT = "SHOW_ALERT"
const HIDE_ALERT = "HIDE_ALERT"



export const alertInitialState = {
    alertText: "",
    alertType: "",
    visible: false
}
export type AlertInitialStateType = typeof alertInitialState

type ProprtisType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<ProprtisType<T>>

export const alertActions = {
    showAlert: (payload: AlertInitialStateType) => ({ type: SHOW_ALERT, payload } as const),
    hideAlert: () => ({ type: HIDE_ALERT } as const)
}
type AlertActionsType = InferActionsType<typeof alertActions>

export const alertReducer = (state: AlertInitialStateType, action: AlertActionsType):AlertInitialStateType => {
    switch (action.type) {
        case SHOW_ALERT:
          return  {
            ...action.payload
         }
         case HIDE_ALERT:
            return  {
              ...state,visible: false
            }
         default : return state
 }
}
