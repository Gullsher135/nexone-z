import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

// ---STYLE---
import './App.css'

// ---PAGES---
import Index from './pages/index'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Index />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App