import React from 'react'
import './App.scss'
import Todos from 'containers/Todo'

const App = () => {
  return (
    <div className="root" data-test="root">
      <Todos />
    </div>
  )
}

export default App
