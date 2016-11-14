import Immutable from 'immutable'

export default (state = Immutable.list(["Code More!"]), action) => {
  switch(action.type) {
    case 'addTodo':
    return state.push(action.todo)
    default:
    return state
  }
}
