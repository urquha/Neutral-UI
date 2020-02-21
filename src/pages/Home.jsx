import React from "react"

import {Link} from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>Yo yo yo</h1>
            <Link to="/redirect">
                <button>Dont Click Me Boyo</button>
            </Link>
        </div>
    )
}

export default Home