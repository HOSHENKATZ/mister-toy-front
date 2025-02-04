
import { Link } from "react-router"

export function AppFooter() {


    return (
        <footer className='app-footer'>

            <p>
                Coffeerights to Hoshen!
            </p>
            <div className="links flex align-center">

                <h5>
                    <Link to={'/About'}>About</Link>
                </h5>
                <h5>
                    <a href="https://github.com/HOSHENKATZ">My-github</a>
                </h5>

            </div>
        </footer>
    )
}
