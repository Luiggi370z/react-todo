import React from 'react'
import './App.scss'
import Todos from 'containers/Todo'

class App extends React.Component {
  render() {
    return (
      <div className='root'>
        <Todos />
      </div>
    )
  }
}

export default App
