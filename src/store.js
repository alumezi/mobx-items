import { observable, computed, autorun, decorate, action } from 'mobx'

export default class ObservableTodoStore {
  todos = [
    {
      task: 'first todo',
      completed: false,
      assignee: null
    }
  ]
  pendingRequests = 0
  newItemInput = ''

  constructor () {
    autorun(() => console.log(this.report))
  }

  get completedTodosCount () {
    return this.todos.filter(todo => todo.completed === true).length
  }

  get report () {
    if (this.todos.length === 0) return '<none>'
    return (
      `Next todo: "${this.todos[0].task}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    )
  }

  addTodo (task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    })
  }

  submitNewTodo = event => {
    event.preventDefault()
    this.addTodo(this.newItemInput)
  }

  changeNewItemInput = event => {
    this.newItemInput = event.target.value
  }
}

decorate(ObservableTodoStore, {
  todos: observable,
  pendingRequests: observable,
  newItemInput: observable,
  completedTodosCount: computed,
  report: computed,
  changeNewItemInput: action,
  submitNewTodo: action
})
