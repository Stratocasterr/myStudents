import React from 'react'
import {Link} from 'react-router-dom'
import SwitchTheme from '../components/SwitchTheme'
import {ReactComponent as ArrowLeft} from '../icons/arrow-left.svg'
const Settings = () => {
  return (
    <div className='page'>
      <SwitchTheme/>
      <Link to ={"/"}>
            <ArrowLeft 
              id="arrow-left-icon" 
              className="icon" 
            />
      </Link>
    </div>
  )
}

export default Settings
