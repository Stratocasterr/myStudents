import React from 'react'
import {Link} from 'react-router-dom'
const MenuButton = (props) => {
  const {
    button_text,
    image,
    color,
    link_to
    } = props
    
  return (
    <div>
        <Link to ={link_to}>
            <button 
                type = 'button' 
                style={{'backgroundColor':`${color}`}}
                className='menu-button'>
                <img 
                    alt='button-img' 
                    src={require(`../images/${image}`)} 
                />
                <span>{button_text}</span>
            </button>
        </Link>
    </div>
  )
}

export default MenuButton
