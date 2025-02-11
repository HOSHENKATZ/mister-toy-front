

import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { LoginForm } from './LoginForm';
//  const { NavLink } = ReactRouterDOM
import { logout } from '../../store/actions/user.actions.js';
import { useDispatch, useSelector } from 'react-redux'

export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.loggedInUser)
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };
    function onLogout() {
        try {
            logout()
            showSuccessMsg('Bye Bye')
        } catch (error) {
            console.log('OOPs try again')
        }
    }

    return (
        <header className={isOpen ? 'app-header menu-open' : 'app-header'} >
            <section className="header-container flex justify-between align-center ">
                <h1 className='logo'>Mister Toy App</h1>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/toy" >Toys</NavLink>
                    <NavLink to="/review">reveiws</NavLink> 
                    <NavLink to="/dash" >Dash-Board</NavLink>
                    {user ? (
                        <>
                            <Link>Hello {user.fullname}</Link>
                            <button onClick={onLogout}>Logout</button>
                        </>
                    ) : (
                        <NavLink to="/sign" >Login/Signup</NavLink>)}
                    {/* <a href="#">🛒 Cart</a>  */}

                </nav>
                <a className="btn-toggle-menu" onClick={toggleMenu}><img src="src/assets/img/Ham.svg" alt="" /></a>
            </section>

        </header>
    )
}
