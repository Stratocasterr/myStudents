import React,{useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom';
import SingleStudentInfo from '../components/SingleStudentInfo';
import UpdateStudents from '../components/UpdateStudents';
import {ReactComponent as ArrowLeft} from '../icons/arrow-left.svg'
import {ReactComponent as HomeIcon} from '../icons/home.svg'
import {ReactComponent as RemoveIcon} from '../icons/remove.svg'
import Stats from '../components/Stats';
import convertDate  from '../functions/convertDate';
import mapProps from '../functions/mapProps'

const StudentPage = () => {
    const {id} = useParams()
    const [student, setStudent] = useState(null)
    const [editing, setEditing] = useState(false)
    const getStudent = async() => {
        
        const response = await fetch(`/students/${id}`)
        const data = await response.json()
        setStudent(data)
    }
    useEffect(()=>{
        getStudent()
    },[])

    const headers = ["Student's name", 'School', "Salary", 'About', 
                     'Lesson time', "Lessons days", 
                        "Unpaid teaching time", "Holydays/break"]

    const removeStudent = async() =>
    {
        const request = await fetch(`/students/${id}/remove/`,{
          method:'DELETE',
          headers: {
            'Content-Type':'application/json'
        }
        })
        window.location = "/students"
    }

    return (
        <div className='page'>
             <div className='navigate-buttons'>
             <Link to ={"/students"}>
                <ArrowLeft id="arrow-left-icon" className="icon" />
            </Link>
            <Link to ={"/"}>
                <HomeIcon id = "home-icon" className="icon" />
            </Link>
            </div>
        {student!==null&&<>
            <div className='student' id='full-student-info'>
                {!editing&&<>
                    {mapProps(student, headers)}        
                <span>
                    Created: {convertDate(student.created)}
                </span>
                <br></br>          
                {(student.created !== student.updated) && 
                    <span>
                        Last update: {convertDate(student.updated)}
                    </span>}      
                </>}
            </div>         
            <UpdateStudents
                id='edit-student-button'
                functionality = "edit"
                props = {student}
            /> 
            <Stats 
                id = 'single-student-stats'
                students = {[student]}
            />
            <button 
                type="button" 
                className='circle-button'
                id='remove-student-button'
                onClick={() =>{removeStudent()}}
                >
                    <RemoveIcon
                    className='icon'/>
            </button>   
        </>}      
        </div>
      )
    }
export default StudentPage
