import { usePaginationContext } from '../usePaginationContext'
import styles from '../style.module.scss'

function Pages() {
  const { page, totalPages, handlePageClick } = usePaginationContext()

  return (
    <div className={styles.pages}>
      {Array(totalPages)
        .fill('1')
        .map((_, idx) => (
          <div
            key={idx}
            className={`${styles.page} ${
              page === idx + 1 ? styles.active : ''
            }`}
            onClick={() => handlePageClick(idx + 1)}
          >
            {idx + 1}
          </div>
        ))}
    </div>
  )
}

export default Pages
