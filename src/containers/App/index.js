import React from 'react'
import { addDays } from 'date-fns'
import './App.scss'
import Container from 'components/layout/Home'
import Overlay from 'components/layout/Overlay'
import TodoAdd from 'components/TodoAdd'
import Todos from 'components/Todos'
import TodoForm from 'components/TodoForm'
import Summary from 'components/Summary'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        icon: 'highlight',
        category: '1',
        description: 'Deliver design',
        location: 'Lima Office',
        date: addDays(new Date(), 2),
        done: false
      },
      {
        id: 2,
        icon: 'walk',
        category: '2',
        description: 'Run with friends',
        location: 'Central Park',
        date: addDays(new Date(), 3),
        done: false
      },
      {
        id: 3,
        icon: 'shop',
        category: '3',
        description: "Buy mother's day present",
        location: 'Jockey Plaza Shopping Center',
        date: new Date(),
        done: true
      },
      {
        id: 4,
        icon: 'shop',
        category: '3',
        description: "Buy mother's day present",
        location: 'Jockey Plaza Shopping Center',
        date: new Date(),
        done: false
      },
      {
        id: 5,
        icon: 'shop',
        category: '3',
        description: "Buy mother's day present",
        location: 'Jockey Plaza Shopping Center',
        date: new Date(),
        done: true
      },
      {
        id: 6,
        icon: 'shop',
        category: '3',
        description: "Buy mother's day present",
        location: 'Jockey Plaza Shopping Center',
        date: addDays(new Date(), 10),
        done: true
      },
      {
        id: 7,
        icon: 'shop',
        category: '3',
        description: "Buy mother's day present",
        location: 'Jockey Plaza Shopping Center',
        date: addDays(new Date(), 10),
        done: false
      },
      {
        id: 8,
        icon: 'shop',
        category: '3',
        description: "Buy mother's day present",
        location: 'Jockey Plaza Shopping Center',
        date: addDays(new Date(), 30),
        done: true
      }
    ],
    addNew: false
  }

  handleClick = () => this.setState({ addNew: !this.state.addNew })

  render() {
    return (
      <div className='root'>
        <Container
          activeRight={this.state.addNew}
          left={<Todos todos={this.state.todos} />}
          right={<TodoForm />}
          overlay={
            <Overlay
              left={<Summary todos={this.state.todos} />}
              right={<TodoAdd />}
            />
          }
        />
        <button onClick={this.handleClick}>Toggle</button>
      </div>
    )
  }
}

export default App
