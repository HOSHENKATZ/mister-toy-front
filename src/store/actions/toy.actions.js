import { toyService } from "../../assets/services/toy.service.js";
import { showSuccessMsg } from "../../assets/services/event-bus.service.js";
import { ADD_TOY, TOY_UNDO, REMOVE_TOY, SET_TOYS, SET_FILTER_BY, SET_IS_LOADING, UPDATE_TOY, SET_MAX_PAGE } from "../reducers/toy.reducer.js";
import { store } from "../store.js";

export function loadToys() {
    console.log('hey')
    const { filterBy } = store.getState().toyModule

    store.dispatch({ type: SET_IS_LOADING, isLoading: true })

    return toyService.query(filterBy)
        .then((toys)=> {
           
            store.dispatch({ type: SET_TOYS, toys })
            // store.dispatch({ type: SET_MAX_PAGE, maxPage })
        })
        .catch(err => {
            console.log('toys action -> Cannot load toys', err)
            throw err
        })
        .finally(() => {
            store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        })
       
}

export function removeToy(toyId) {
    return toyService.remove(toyId)
        .then(() => {
            store.dispatch({ type: REMOVE_TOY, toyId: toyId })
        })
        .catch(err => {
            console.log('car action -> Cannot remove car', err)
            throw err
        })
}

export function removeToyOptimistic(toyId) {
    store.dispatch({ type: REMOVE_TOY, toyId })
    return toyService.remove(toyId)
        .then(() => {
            showSuccessMsg('Removed Toy!')
        })
        .catch(err => {
            store.dispatch({ type: CAR_UNDO })
            console.log('toy action -> Cannot remove toy', err)
            throw err
        })
}

export function saveToy(toy) {
    const type = toy._id ? UPDATE_TOY : ADD_TOY
    return toyService.save(toy)
        .then(savedToy => {
            console.log('savedToy:', savedToy)
            store.dispatch({ type, toy: savedToy })
            return savedToy
        })
        .catch(err => {
            console.log('car action -> Cannot save car', err)
            throw err
        })
}

export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}