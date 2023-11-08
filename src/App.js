import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import SelectedPlan from './components/SelectePlan/SelectedPlan'
import Addon from './components/Addon/Addon'
import Summary from './components/Summary/Summary'
import LeftBar from './components/LeftBar/LeftBar'
import "./App.css"

const App = () => {
  
  return (
    
    <div className='app'>
        <LeftBar />
          <Routes>
            <Route exact path="/1" element={<PersonalInfo />} />
            <Route exact path="/2" element={<SelectedPlan />} />
            <Route exact path="/3" element={<Addon />} />
            <Route exact path="/4" element={<Summary />} />
            

          </Routes>
    </div>
    
    
    
  )
}

export default App