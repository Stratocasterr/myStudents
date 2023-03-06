import React from 'react'

const SingleStudentInfo = (props) => {
    const {
        header,
        info
    } = props
    
  return (
    <div className='single-info'>
        <header>{header}</header>
        <span>{info}</span>
    </div>
  )
}

export default SingleStudentInfo
