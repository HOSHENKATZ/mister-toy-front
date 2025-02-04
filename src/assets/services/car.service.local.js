
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'toyDB'
_createToys()
export const carService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getRandomCar,
    getDefaultFilter
}

function query(filterBy = {}) {
    return storageService.query(STORAGE_KEY)
        .then(toys => {
            if (!filterBy.txt) filterBy.txt = ''
            if (!filterBy.maxPrice) filterBy.maxPrice = Infinity
            if (!filterBy.minAge) filterBy.minSpeed = -Infinity
            const regExp = new RegExp(filterBy.txt, 'i')
            return toys.filter(toy =>
                regExp.test(toy.name) &&
                toy.price <= filterBy.maxPrice &&
                toy.minAge >= filterBy.minAge
            )
        })
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(carId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, carId)
}


function save(car) {
    if (car._id) {
        return storageService.put(STORAGE_KEY, car)
    } else {
        // when switching to backend - remove the next line
        car.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, car)
    }
}

function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price:'',
        minAge: '',
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: Date.now(),
        inStock: true,
        }
}

function getRandomCar() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
        speed: utilService.getRandomIntInclusive(90, 200),
    }
}

function getDefaultFilter() {
    return { txt: '', maxPrice: '', minSpeed: '' }
}

function _createToys() {
    let toys = utilService.loadFromStorage(STORAGE_KEY)
    if (!toys || !toys.length) {
        toys = []
        const txts = ['Teddy', 'Talking doll', 'Basket ball', 'Volly ball']
        for (let i = 0; i < 15; i++) {
            const txt = txts[utilService.getRandomIntInclusive(0, txts.length - 1)]
            console.log(txt)
            toys.push(_createToy(txt , utilService.getRandomIntInclusive(1, 10),utilService.getRandomIntInclusive(1, 300)))
        }
        utilService.saveToStorage(STORAGE_KEY, toys)
    }
}


function _createToy(txt, minAge, price){
    return {
        _id: utilService.makeId(),
        name: txt,
        price,
        minAge,
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: 1631031801011,
        inStock: true,
        }
}
// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))

