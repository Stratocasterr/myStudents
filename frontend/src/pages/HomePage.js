import React from 'react'
import MenuButton from '../components/MenuButton'

const HomePage = () => {
  return (
    <div id= "home-page-container" className ='page'>
        <header>Home Page</header>
        <div id="home-page-buttons">
          <MenuButton
            button_text = "Your students"
            link_to = "/students/"
            image = "student.png"
            color = "#89DBEC"
          />
          <MenuButton
            button_text = "settings"
            link_to = "/settings/"
            image = "settings.png"
            color = "#FA9D00"
          />
        </div>
        
    </div>
  )
}

export default HomePage
