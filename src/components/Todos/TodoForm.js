import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Введите сюда новую задачу"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="Внести данную задачу в список задач">
          Внести данные
        </Button>
      </form>
    </div>
  )
}
export default TodoForm
