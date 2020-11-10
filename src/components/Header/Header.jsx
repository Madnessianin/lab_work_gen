import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/images/logo192.png'

const Header = () => {
    return (
        <header className = {style.header}>
           <div className = {style.inner}>
                <img className = {style.img} alt="" src = {logo}/>
                <div className = {style.userName}>UserName</div>
           </div> 
        </header>
    )
}


export default Header;
