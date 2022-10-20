import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Profile() {

    return (
            <li>
            <NavLink
            className='nav--item'
              style = {({ isActive }) => {
                return isActive ? { background : 'rgb(56, 56, 56)'} : {}
              }} end to='/profilepage'>Profile
             </NavLink>
          </li>
    )
}
