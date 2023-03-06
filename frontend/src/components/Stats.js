import React,{useState} from 'react'
import {ReactComponent as StatsIcon}from '../icons/stats_icon.svg'
import {ReactComponent as Xicon} from '../icons/x-icon.svg'

const Stats = (props) => {
    const {students, id} = props
    const [state,setState] = useState(false)
    
    let all_lessons_time = 0
    let salary_per_week = 0
    let pending = 0
   
    const getStats = () => {
        if(students.length) 
        {  
            students.forEach((student,index) => {
                // pending payment
                pending += student.salary * student.unpaid_time/60

                //all lessons time
                let lessons_amount = 1
                for(let i = 0; i< student.lessons_times.length; i++)
                {
                    if(student.lessons_times[i]===',') lessons_amount+=1
                }               
                all_lessons_time += lessons_amount * student.single_lesson_time / 60
                
                //salary per week
                salary_per_week += lessons_amount * student.salary
            });
        }
    }
    getStats()
    
    return (
        <div id='stats-container'>
            {!state && <>
                <StatsIcon 
                    id={id}
                    className='icon'
                    onClick={()=>{setState(true)}}        
                />
                </>}
            {state && students.length && 
            <div 
                id='stats-list'>
                <p className='stats-info'>
                    Pending payment: {pending} zł
                </p>
                {students.length>1&&<p className='stats-info'>
                    Students amount: {students.length}
                </p>}
                <p className='stats-info'>
                    All lessons time: {all_lessons_time} hours/week
                </p>
                <p className='stats-info'>
                    Salary per week: {salary_per_week} zł
                </p>
                
                <Xicon 
                    className='icon' 
                    onClick={()=>{setState(false)}}
                    id='x-icon' 
                /> 
            </div>}
        </div>
    )
}

export default Stats
