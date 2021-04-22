import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = () => {
    return (
        <>
        <div>

            <Spinner animation="border" role="status" variant="info" style={{width:'30px', height:'30px', display:'block',margin:'auto'}}>
            <span className="sr-ony"> </span>
            </Spinner>
        </div>
        </>
    )
}

export default Loader
