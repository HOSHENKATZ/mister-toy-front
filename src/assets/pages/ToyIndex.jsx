// const { useState, useEffect } = React
// const { Link } = ReactRouterDOM
// const { useSelector, useDispatch } = ReactRedux

import { useDispatch, useSelector } from 'react-redux'
import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { ToyList } from '../cmps/ToyList.jsx'
import { toyService } from '../services/toy.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { loadToys, removeToy, removeToyOptimistic, saveToy, setFilterBy } from '../../store/actions/toy.actions.js'
import { ADD_TOY_TO_CART } from '../../store/reducers/toy.reducer.js'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PaginationButtons } from '../cmps/PaginationButtons.jsx'
import React from 'react';


export function ToyIndex() {


    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    const maxPage = useSelector(storeState => storeState.toyModule.maxPage)
   
    // console.log('cars:', cars)
    const navigate = useNavigate()
    useEffect(() => {
        loadToys()
            .then(() => res.toys)
            .catch(err => {
                showErrorMsg('Cannot load toys!')
            })
    }, [filterBy])

    function onSetFilter(filterBy) {
        console.log(filterBy)
        setFilterBy(filterBy)
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

    // function onAddtoy() {
    //     const toyToSave = toyService.getRandomCar()
    //     saveToy(toyToSave)
    //         .then((savedToy) => {
    //             showSuccessMsg(`Toy added (id: ${savedToy._id})`)
    //         })
    //         .catch(err => {
    //             showErrorMsg('Cannot add toy')
    //         })
    // }

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
    function onChangePageIdx(diff) {
        let newPageIdx = +filterBy.pageIdx + diff
        if (newPageIdx < 0) newPageIdx = maxPage - 1
        if (newPageIdx >= maxPage) newPageIdx = 0
        onSetFilter({ pageIdx: newPageIdx })
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
                {/* <PaginationButtons
                    pageIdx={filterBy.pageIdx}
                    onChangePageIdx={onChangePageIdx}
                /> */}



            </main>
        </div>
    )
}




export const data = {
    labels: ['2 years', '3 years', '4 years', '5 years', '6 years', '7 years', '8 years', '9 years'],
    datasets: [
        {
            label: '# of Votes',
            data: [3, 6, 4, 3, 1, 1, 1, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 0,
        },
    ],
};

export function App() {
    return <Doughnut data={data} />;
}
