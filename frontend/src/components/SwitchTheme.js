import React, {useState} from 'react'
import {ReactComponent as Sun} from '../icons/sun.svg'
import {ReactComponent as Moon} from '../icons/moon.svg'

const SwitchTheme = () => {

    const [theme, setTheme] = useState('light')
        
    function changeTheme()
    {
        setTheme(theme==='dark'?'light':'dark')
        document.body.classList.toggle('dark')  
    }

    return (
        <div id ='change-theme-container'>
            <button 
                id = 'change-theme-button'
                className='circle-button'
                style={{'backgroundColor':theme==='light'?'#05314b':'#dfd98d'}}
                onClick={() => {changeTheme()}}           
                > 
                {theme==='dark'&&
                <Sun
                    id='theme-icon'
                    className='icon'
                />}
                {theme ==='light'&&
                <Moon
                    id='theme-icon'
                    className='icon'
                />}            
            </button>          
        </div>
    )
}

export default SwitchTheme
