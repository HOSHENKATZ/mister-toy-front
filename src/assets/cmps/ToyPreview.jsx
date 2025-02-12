import { Link } from "react-router-dom";

export function ToyPreview({ toy }) {

    return (
        <article className="toy-preview preview">
            <h4>{toy.name}</h4>
            <p>Price: <span>${toy.price.toLocaleString()}</span></p>
            <p>min-age: {toy.minAge} years</p>
            <Link className="details" to={`/toy/${toy._id}`}>Details</Link>

        </article>
    )
}