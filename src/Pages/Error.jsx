import {Link} from "react-router-dom";

function Error() {
    return (

        <>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <Link to="/">Volver al Home</Link>
        </>

    )
}

export default Error