// import { useDispatch, useSelector } from "react-redux"
// import { CHANGE_BY } from "../store/reducers/user.reducer.js"
// import { useEffect, useState } from "react"
// import logoImg from "../assets/img/logo.png"
// import { useToggle } from "../hooks/useToggle.js"
// const { useState } = React
// const { useSelector, useDispatch } = ReactRedux


export function HomePage() {
    // const dispatch = useDispatch()
    // // const [_count, setCount] = useState(10)
    // const count = useSelector(storeState => storeState.count)

    // // const [isOn, setIsOn] = useState(false)
    // const [isOn, onToggle] = useToggle(false)


    // function changeCount(diff) {
    //     // setCount(count => count + diff)
    //     // dispatch({ type: INCREMENT })
    //     dispatch({ type: CHANGE_BY, diff })
    // }

    return (
        <section className="home">
            <div className="img-container">
            <img src="src/assets/img/image.png" alt="" />
            </div>

        </section >
    )
}