import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        <div></div>
      </div>
    </div>
  )
}
