import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import style from './Button.module.css'

const Button = (props) => {
    
    return (
        <div className = {style.wrapperBtn}>
            {props.link 
            ? <NavLink to = {props.link}>{props.textBtn}</NavLink>
            :<button onClick = {props.onClick} className = {style.btn} type = {props.type} >{props.textBtn}</button>}
        </div>
    )
}

export default Button;