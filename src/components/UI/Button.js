import styles from './Button.module.css'

function Button(props) {
  const { children, title, disabled = false } = props
  console.log(props)
  return (
    <button {...props} className={styles.button} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
