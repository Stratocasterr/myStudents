import React from 'react'
import SingleStudentInfo from '../components/SingleStudentInfo'

const mapProps = (props, headers) => 
    {
        let infos =[]
        Object.keys(props).slice(1).map((key,index)=>{
        let info = props[key]
        const header = headers[index]

        //holydays
        if( typeof info === 'boolean')
        {
          if(info) info = "Yes"
          else info = "Nope"
        }

        //salary
        if(header==='Salary') info += " zł"

        //unpaid teaching time
        else if(['Unpaid teaching time',"Lesson time"].includes(header))
          info += " min"

        if(headers[index])
        {
            infos.push(
                <SingleStudentInfo
                    key = {index}
                    header = {header}
                    info = {info}
            />)
        }   
      })
      return(infos)
    }   
  
export default mapProps
