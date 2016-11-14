// if this don't works try to change the folder back to .jsx instead of .js
import React from 'react'
import { connect } from 'react-redux'

const Todos = ({todos}) => (
  <div>
  <h1>Todos</h1>
  {todos.map(todo => <p key={todo}>{todo}</p>)}
  </div>
)

function mapStateToProps(todos){
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos)
