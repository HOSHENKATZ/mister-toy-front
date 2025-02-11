// const { useState, useEffect, useRef } = React

import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service.js"


export function ToyFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const filterDebounce = useRef(utilService.debounce(onSetFilter, 300))

    useEffect(() => {
        filterDebounce.current(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
       
    }

    return (
        <section className="toy-filter full main-layout">
            <h2>Toys Filter</h2>
            <form >
                <label htmlFor="toy-name">Name:</label>
                <input type="text"
                    id="toyName"
                    name="toyName"
                    placeholder="By name"
                    value={filterByToEdit.toyName}
                    onChange={handleChange}
                />

                <label htmlFor="maxPrice">Max price:</label>
                <input type="number"
                    id="maxPrice"
                    name="maxPrice"
                    placeholder="By max price"
                    value={filterByToEdit.maxPrice || ''}
                    onChange={handleChange}
                />

                <label htmlFor="min-age">Min age:</label>
                <input type="number"
                    id="minAge"
                    name="minAge"
                    placeholder="By min age"
                    value={filterByToEdit.minAge || ''}
                    onChange={handleChange}
                />

            </form>

        </section>
    )
}