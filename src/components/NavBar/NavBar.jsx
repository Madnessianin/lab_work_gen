import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className = {style.nav}>
            <div className = {style.item}>
                <NavLink to = {"/tests"} activeClassName={style.active}>Tests</NavLink>
            </div>
            <div className = {style.item}>
                <NavLink to = {"/results"} activeClassName={style.active}>Result</NavLink>
            </div>
                
        </nav>
    )
}

export default NavBar;