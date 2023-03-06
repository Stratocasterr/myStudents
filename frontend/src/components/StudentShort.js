import React, { useState } from 'react'
import UpdateStudents from './UpdateStudents'
import SingleStudentInfo from './SingleStudentInfo'
import DisplayStudentDetails from './DisplayStudentDetails'
import mapProps from '../functions/mapProps'

const StudentShort = (props) => {
    
    const {
        id,
        name,
        salary,
        lessons_time,
        unpaid_time,
        holydays,
        } = {...props}

    

    const headers = ["Student's name", "Salary", 
                     "Lessons days", 
                        "Unpaid teaching time", "Holydays/break"]

    let infos = mapProps(props, headers)

    return (
      <div className='student'>
        <>
          {infos}
           
        </>
          <DisplayStudentDetails
            id = {id}
          />
          
      </div>
  )
}

export default StudentShort
