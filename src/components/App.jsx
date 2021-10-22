import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/categories' component={HomePage} />
          <Redirect from='/' to='/categories' />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
