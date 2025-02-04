
// import { UserMsg } from './UserMsg.jsx'
// import { ShoppingCart } from './ShoppingCart.jsx'
// import { TOGGLE_CART_IS_SHOWN } from '../store/reducers/car.reducer.js'
// import { useDispatch, useSelector } from 'react-redux'

export function AppFooter() {
    // const dispatch = useDispatch()
    // const isCartShown = useSelector(storeState => storeState.carModule.isCartShown)
    // const count = useSelector(storeState => storeState.userModule.count)
    // const carsLength = useSelector(storeState => storeState.carModule.cars.length)
    // const shoppingCartLength = useSelector(storeState => storeState.carModule.shoppingCart.length)


    return (
        <footer className='app-footer'>
            
            <p>
                Coffeerights to all - Count: 
            </p>
            <h5>
                <span></span> Products in your Cart
                <a href="#" >
                    
                </a>
            </h5>
           
        </footer>
    )
}
