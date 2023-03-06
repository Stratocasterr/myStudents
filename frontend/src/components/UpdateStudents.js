import React,{useState} from 'react'

const UpdateStudents = (props) => {

    const functionality = props.functionality
    if(!props) props = {props:{}} 
    
    const {
        id,
        name,
        school,
        salary,
        body,
        single_lesson_time,
        lessons_times,
        unpaid_time,
        holydays,
        created_date,
        updated_date
    } = props.props

    const [adding, setAdding] = useState(false)
    const [editing, setEditing] = useState(false)

//student props
    const [new_name, setName] = useState(name)
    const [new_school, setSchool] = useState(school)
    const [new_description, setDescription] = useState(body)
    const [new_salary, setSalary] = useState(salary)
    const [new_single_lesson_time, setSingle_lesson_time] = useState(single_lesson_time)
    const [new_lessons_time, setLessons_time] = useState(lessons_times)
    const [new_unpaid_time, setUnpaid_time] = useState(unpaid_time)
    const [new_holydays, setHolydays] = useState(false)
    
    function isNumber(char) 
    {
        return /^\d+$/.test(char);
    }
      
    const updateStudents = async(operation) =>
    {   
        const new_student =
        {
            id: id,
            name: new_name,
            school: new_school,
            body: new_description,
            salary: new_salary,
            single_lesson_time: new_single_lesson_time,
            lessons_times : new_lessons_time,
            unpaid_time : new_unpaid_time,
            holydays : new_holydays
        }

        if(operation ==="add")
        {
            const request = await fetch('/student/add/',{
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(new_student)
            })
            setAdding(false)
            window.location = `/students`
        }

        else if(operation === "edit")
        {
            const request = await fetch(`/students/${id}/update/`,
            {
            method:'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(new_student)
        })
            setEditing(false)
            window.location = `/students/${id}`
        } 
    }

    return (
        <div >  
            {!adding&&functionality === "add" && <button
                className='circle-button'
                type='button'
                onClick={()=>{setAdding(true)}}>
                +
            </button>}
            {!editing&&functionality === "edit" && <button
                className='circle-button'
                id="edit-student-button"
                type='button'
                onClick={()=>{setEditing(true)}}>
                Edit
            </button>}
            {(adding || editing )&&<div id='update-form-container'>
                
                <form id='add-student-form'>
                    <header>{adding? "Add student": "Update student"}</header>
                    <label className='label' >Name</label>
                    <input 
                        className='add-input'
                        placeholder={editing?name:'name'}
                        value={new_name}
                        onChange={(e) => {setName(e.target.value)}}>
                    </input>
                    <label className='label' >School</label>
                    <input 
                        className='add-input'                      
                        placeholder={editing?school:'school and class'}
                        value={new_school}
                        onChange={(e) => {setSchool(e.target.value)}}>
                    </input>
                    <label className='label' >Salary </label>
                    <input 
                        className='add-input'                      
                        placeholder={editing?salary:'money [zł] / hour'}
                        value={new_salary}
                        onChange={(e) => { 
                                if(isNumber(e.target.value) || e.target.value === '') 
                                    setSalary(e.target.value)
                                else  setSalary(0)
                            }}>
                    </input>
                    <label className='label' >About</label>
                    <textarea 
                        className='add-input'                        
                        placeholder={editing?body:'about...'}
                        value={new_description}
                        onChange={(e) => {setDescription(e.target.value)}}>
                    </textarea>
                    <label className='label' >Single lesson time</label>
                    <input 
                        className='add-input'              
                        placeholder={editing?single_lesson_time:'single lesson time [min]'}
                        value={new_single_lesson_time}
                        onChange={(e) => { 
                            if(isNumber(e.target.value) || e.target.value === '') 
                                setSingle_lesson_time(e.target.value)
                            else  setSingle_lesson_time(0)
                        }}>
                    </input>
                    <label className='label' >Lessons days</label>
                    <input 
                        className='add-input'                       
                        placeholder={editing?lessons_times:'lessons times'}
                        value={new_lessons_time}
                        onChange={(e) => {setLessons_time(e.target.value)}}>
                    </input>
                    <label className='label' >Unpaid teaching time</label>
                    <input 
                        className='add-input'                
                        placeholder={editing?unpaid_time:'unpaid teaching time [min]'}
                        value={new_unpaid_time}
                        onChange={(e) => { 
                            if(isNumber(e.target.value) || e.target.value === '') 
                                setUnpaid_time(e.target.value)
                            else  setUnpaid_time(0)
                        }}>
                    </input>
                   <br></br>
                   <div id='holydays-input-container'>
                        <span>on holydays?</span>
                        <input 
                            type = "checkbox"
                            id='holydays-input'
                            value={holydays}
                            onClick={(e) => {setHolydays((prev)=> {return !prev})}}>
                        </input>                     
                   </div>     
                   <div id="save-cancel-buttons">
                    <button
                        id="cancel-button"
                        onClick={() => {adding?setAdding(false):setEditing(false)}}
                        type="button">              
                        Cancel
                    </button>
                    <button
                        id="save-button"
                        type="button" 
                        className='circle-button'     
                        onClick= {()=>{adding?updateStudents("add"):updateStudents("edit")}}>
                        Save
                    </button>          
                </div>                      
                </form>
                
            </div>}      
        </div>
    )
}
export default UpdateStudents
