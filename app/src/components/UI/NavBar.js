import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';
import Profile from '../buttons/Profile'
import recordImage from '../../assets/record.png'
import cartImage from '../../assets/cart-shopping-solid.svg'
import CartDropdown from './CartDropdown';

export default function NavBar(props) {

    const {isAuthenticated} = useAuth0()
    const [open, setOpen] = React.useState(false)
    const handleClick = () => {
      setOpen(!open)
    }

    const genres = ['Rock', 'Pop', 'Hip Hop', 'Metal', 'Punk', 'Jazz', 'Folk']

    const genreMapForDropdown = genres.map(genre => {
        return (
          <li className='dropdwon--item--container'>
            <NavLink 
            onClick={() => props.setGenreForPagedRecords(genre)}
            className='dropdown--item' 
            end to='/records'>{genre}
            </NavLink>
          </li>
        )
    })

    return (
        <header className='nav--bar'>
        <nav>
        <NavLink end to='/' className='home--link'>
          <div className='logo--container'>
            <h1 >KR Records</h1>
            <img className='image--record' src={recordImage} alt='record'></img>
          </div>
        </NavLink>
          <ul>
            <li className='dropdown--menu--main'>
              <div className='nav--item--records'>Records</div>
              <ul className='dropdown--menu'>
                <li>
                <NavLink 
                className='dropdown--item'
                 end to='/records'>
                All Records
                </NavLink>
                </li>
                {genreMapForDropdown}
                <li>
                  <NavLink className='dropdown--item' 
                  end to='/records/new'>New Record
                  </NavLink>
                </li>
              </ul>
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
                }} end to='/collection'>Wishlist
            </NavLink>
            </li>
            {isAuthenticated && <Profile /> }
           
            <li className='nav--buttons'>
            <LoginButton/>
            <LogoutButton />
            <div className='cart--container' onClick={handleClick}>
               <img className='cart' src={cartImage} alt='cart'/>
            <div className='counter'>{props.totalQuantity}</div>
                </div>
              {open ? (<CartDropdown
                handleClick={handleClick}
                inputThemeStyles={props.inputThemeStyles}
                goToCheckout={props.goToCheckout}
                checkout={props.checkout}
                totalQuantity={props.totalQuantity}
                totalPrice={props.totalPrice}
                addToWishlist={props.addToWishlist}
                addToCart={props.addToCart}
                decrementRecordInCart={props.decrementRecordInCart}
                deleteFromCart={props.deleteFromCart}
                cart={props.cart}
                recordData={props.recordData}/>) : null}
            </li>
          </ul>                                              
        </nav>
      </header>
    )
}