// const { useState, useEffect } = React
// const { Link } = ReactRouterDOM
// const { useSelector, useDispatch } = ReactRedux

import { useDispatch, useSelector } from 'react-redux'
import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { ToyList } from '../cmps/ToyList.jsx'
import { carService } from '../services/car.service.local.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { loadToys, removeToy, removeToyOptimistic, saveToy, setFilterBy } from '../../store/actions/car.actions.js'
import { ADD_TOY_TO_CART } from '../../store/reducers/toy.reducer.js'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function ToyIndex() {

    const dispatch = useDispatch()
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    // console.log('cars:', cars)
    const navigate = useNavigate()
    useEffect(() => {
        loadToys()
            .catch(err => {
                showErrorMsg('Cannot load toys!')
            })
    }, [filterBy])

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
        console.log(filterBy)
    }

    function onRemoveToy(toyId) {
        removeToyOptimistic(toyId)
            .then(() => {
                showSuccessMsg('Toy removed')
            })
            .catch(err => {
                showErrorMsg('Cannot remove toy')
            })
    }

    function onAddtoy() {
        const toyToSave = carService.getRandomCar()
        saveToy(toyToSave)
            .then((savedToy) => {
                showSuccessMsg(`Toy added (id: ${savedToy._id})`)
            })
            .catch(err => {
                showErrorMsg('Cannot add toy')
            })
    }

    function onEditToy(toy) {
        navigate(`/toy/edit/${toy._id}`)
        // const price = +prompt('New price?')
        // const toyToSave = { ...toy, price }

        // saveToy(toyToSave)
        //     .then((savedToy) => {
        //         showSuccessMsg(`toy updated to price: $${savedToy.price}`)
        //     })
        //     .catch(err => {
        //         showErrorMsg('Cannot update toy')
        //     })
    }

    function addToCart(toy) {
        console.log(`Adding ${toy.name} to Cart`)
        dispatch({ type: ADD_TOY_TO_CART, toy })
        showSuccessMsg('Added to Cart')
    }

    return (
        <div>
            <main>
                <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                {!isLoading
                    ? <ToyList
                        toys={toys}
                        txt="babaasd"
                        nums={[1, 2]}
                        onRemoveToy={onRemoveToy}
                        onEditToy={onEditToy}
                        addToCart={addToCart}
                    />
                    : <div>Loading...</div>
                }
                <hr />
            </main>
        </div>
    )
}

