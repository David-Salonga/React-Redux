import React from 'react'
import "../../styles/style.css";
import "animate.css"

function NotFound() {
    return (
        
        <div className="d-flex justify-content-center align-items-center marginNotFound animate__animated animate__fadeIn" id="main">
            <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
            <div className="inline-block align-middle">
                <h1 className="font-weight-normal lead" id="desc">&nbsp;| The page you requested was not found.</h1>
            </div>
        </div>
    )
}

export default NotFound
