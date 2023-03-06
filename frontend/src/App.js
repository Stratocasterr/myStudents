import React, { createContext } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route
  }
  from "react-router-dom"
import "./styles/App.css"
import "./styles/homePage.css"
import "./styles/menuButton.css"
import "./styles/mainPage.css"
import "./styles/student.css"
import "./styles/addButton.css"
import "./styles/icon.css"
import "./styles/settings.css"
import StudentsListPage from './pages/StudentsListPage';
import HomePage from './pages/HomePage';
import StudentPage from './pages/StudentPage';
import SettingsPage from './pages/SettingsPage'

export const ThemeContext = createContext("light")
function App() {

  return (
      <div className="App" >
        <Router>
          <Routes>
            <Route path = "/" exact element = {<HomePage/>}></Route>
            <Route path = "/settings" exact element = {<SettingsPage/>}></Route>
            <Route path = "/students/" exact element = {<StudentsListPage/>}></Route>
            <Route path = "/students/:id" exact element = {<StudentPage/>}></Route>
          </Routes>
        </Router>
      </div>
  );
}
export default App;
