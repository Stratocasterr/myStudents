import React from 'react'
import {Link} from 'react-router-dom'
const DisplayStudentDetails = (props) => {
    const {id} = props
    return (
        <div>
            <Link to ={`/students/${id}`}>
                <button 
                    className='details-button'>
                    Details
                </button>
            </Link>
        </div>
    )
}

export default DisplayStudentDetails
