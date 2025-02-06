// import { UserMsg } from './UserMsg.jsx'
// import { LoginSignup } from './LoginSignup.jsx'
// import { userService } from '../services/user.service.js'
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
// import { logout } from '../store/actions/user.actions.js'
// import { TOGGLE_CART_IS_SHOWN } from '../store/reducers/car.reducer.js'
// import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

// const { NavLink } = ReactRouterDOM
// const { useSelector, useDispatch } = ReactRedux

export function AppHeader() {
    // const dispatch = useDispatch()
    // const user = useSelector(storeState => storeState.userModule.loggedInUser)
    // // console.log('user:', user)

    // function onLogout() {
    //     logout()
    //         .then(() => {
    //             showSuccessMsg('logout successfully')
    //         })
    //         .catch((err) => {
    //             showErrorMsg('OOPs try again')
    //         })
    // }



    // function onToggleCart(ev) {
    //     ev.preventDefault()
    //     dispatch({ type: TOGGLE_CART_IS_SHOWN })
    // }

    return (
        <header className="app-header main-layout">
            <section className="header-container flex justify-between align-center ">
                <h1>Mister Toy App</h1>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/toy" >Toys</NavLink>
                    <NavLink to="/dash" >Dash-Board</NavLink>
                    <a href="#">🛒 Cart</a>

                </nav>
            </section>
            
        </header>
    )
}
