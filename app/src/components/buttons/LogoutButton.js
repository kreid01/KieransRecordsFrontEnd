import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function LogoutButton(props) {
    const { logout, isAuthenticated } = useAuth0()


    return (
        isAuthenticated && (
        <button style={props.inputThemeStyles} className='auth--btn' onClick={() => logout()}>
            Logout
        </button>)
    )
}