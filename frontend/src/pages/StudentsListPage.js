import React, {useState,useEffect} from 'react'
import MenuButton from '../components/MenuButton'
import StudentShort from '../components/StudentShort'
import UpdateStudents from '../components/UpdateStudents'
import {ReactComponent as ArrowLeft} from '../icons/arrow-left.svg'
import {ReactComponent as HomeIcon} from '../icons/home.svg'
import {Link} from 'react-router-dom'
import Stats from '../components/Stats'

const StudentsListPage = () => {

    const [students, setStudents] = useState([])
    const[pendingPayment, setPendingPayment] = useState(0)

    const getStudents = async()  => 
    {
        const response = await fetch('/students/')
        const data = await response.json()
        setStudents(data)
    }

    useEffect(() => {
      getStudents()
    },[])

    return (
      <div className='page' id = "main-page-container">
        <div className='navigate-buttons' >
          <Link to ={"/"}>
            <ArrowLeft id="arrow-left-icon" className="icon" />
          </Link>
          <Link to ={"/"}>
            <HomeIcon id = "home-icon" className="icon" />
          </Link>
        </div>
        
        <header id="main-page-header">
          Your students
        </header>

          <Stats 
            id = {'stats-icon'}
            students = {students}
          />
      
        <div id='main-page-content'>
          {students.map((student,index) => {
              let space = ''     
              return(
                <>
                    <StudentShort
                      key = {index}
                      id = {student.id}
                      name = {student.name}            
                      salary = {student.salary}   
                      lessons_times = {student.lessons_times}
                      unpaid_time = {student.unpaid_time}
                      holydays = {student.holydays}          
                    />                  
              </>       
              )
          })}                 
        </div>
        <div className='add-student-button'>
            <UpdateStudents
                functionality = "add"
                props = {''}
              />       
          </div>
      </div>
    )
  }

export default StudentsListPage
