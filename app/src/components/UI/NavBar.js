import React from 'react'
import { NavLink } from 'react-router-dom'
import { useThemeUpdate} from '../../context/ThemeContext'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';
import Profile from '../buttons/Profile'
import recordImage from '../../assets/record.png'
import cartImage from '../../assets/cart-shopping-solid.svg'

export default function NavBar(props) {

    const {isAuthenticated} = useAuth0()
    const toggleTheme = useThemeUpdate()
    const darkThemeToggle = (props.darkTheme) ? 'toggle--dark--mode--dark' : 'toggle-dark--mode--light'

    return (
        <header className='nav--bar'>
        <nav style={props.themeStyles}>
        <NavLink end to='/' className='home--link'>
          <div className='logo--container'>
            <h1 style={props.themeStyles}>KR Records</h1>
            <img className='image--record' src={recordImage} alt='record'></img>
          </div>
        </NavLink>
          <ul>
            <li>
              <NavLink
                className='nav--item'
                style = {({ isActive }) => {
                  return isActive ? { background : 'rgb(56, 56, 56)'} : {}
                }} end to='/records'>
                Records
            </NavLink>
            </li>
          <li>
              <NavLink
              className='nav--item'
                style = {({ isActive }) => {
                  return isActive ? { background : 'rgb(56, 56, 56)'} : {}
                }} end to='/blog'>Blog
            </NavLink>
            </li>
            <li>
              <NavLink
              className='nav--item'
                style = {({ isActive }) => {
                  return isActive ? { background : 'rgb(56, 56, 56)'} : {}
                }} end to='/collection'>Collection
            </NavLink>
            </li>
            {isAuthenticated && <Profile /> }
            <li className='nav--buttons'>
              <NavLink
                onClick={(props.checkout)? props.goToCheckout : ''}
                className='cart--container'
                end to='/cart'><img className='cart' src={cartImage} alt='cart'/>
                <div className='counter'>{props.totalQuantity}</div>
              </NavLink>
               <LoginButton/>
               <LogoutButton />
               <button className={darkThemeToggle} onClick={toggleTheme} style={props.inputThemeStyles}></button>
            </li>
          </ul>                                              
        </nav>
      </header>
    )
}