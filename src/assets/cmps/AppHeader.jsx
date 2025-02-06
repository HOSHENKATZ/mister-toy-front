

import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
// const { NavLink } = ReactRouterDOM
// const { useSelector, useDispatch } = ReactRedux

export function AppHeader() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };


    return (
        <header className={isOpen ? 'app-header menu-open' : 'app-header'} >
            <section className="header-container flex justify-between align-center ">
                <h1 className='logo'>Mister Toy App</h1>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/toy" >Toys</NavLink>
                    <NavLink to="/dash" >Dash-Board</NavLink>
                    {/* <a href="#">🛒 Cart</a> */}

                </nav>
                <a className="btn-toggle-menu" onClick={toggleMenu}><img src="src/assets/img/Ham.svg" alt="" /></a>
            </section>

        </header>
    )
}
