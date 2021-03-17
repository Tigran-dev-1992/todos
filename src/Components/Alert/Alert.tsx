import React, { useContext, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { createModuleResolutionCache } from 'typescript'
import { AlertContext } from './AlertContext'


const Alert = () =>{
    const alert = useContext(AlertContext)
    const { alertText, alertType} = { ...alert }
    return (
        <CSSTransition in={alert?.visible} classNames='alert' timeout={300} unmountOnExit mountOnEnter>
            <div className={`alert alert-${alertType} d-flex justify-content-between`} onClick={()=>alert?.hide()}>
                {alertText}
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>alert?.hide()}>&times;</button>
            </div>
        </CSSTransition>

    )
}

export default Alert