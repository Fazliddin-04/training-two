import { useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Pages from './components/Pages'
import NextButton from './components/NextButton'
import PrevButton from './components/PrevButton'
import { PaginationProvider } from './PaginationContext'
import styles from './style.module.scss'

Pagination.propTypes = {
  initialValue: PropTypes.number,
  limit: PropTypes.number,
  count: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.node,
}

function Pagination({ count = 0, limit = 10, onChange, children }) {
  const [page, setPage] = useState(1)

  const totalPages = useMemo(() => Math.ceil(count / limit), [limit, count])

  const firstMounded = useRef(true)
  useEffect(() => {
    if (!firstMounded.current) {
      onChange && onChange(page)
    }
    firstMounded.current = false
  }, [page, onChange])

  const handleIncrement = () => {
    setPage(Math.min(totalPages, page + 1))
  }

  const handleDecrement = () => {
    setPage(Math.max(1, page - 1))
  }

  const handlePageClick = (val) => {
    setPage(val)
  }

  return (
    <PaginationProvider
      value={{
        page,
        totalPages,
        handleIncrement,
        handleDecrement,
        handlePageClick,
      }}
    >
      <div className={styles.pagination}>{children}</div>
    </PaginationProvider>
  )
}

Pagination.NextButton = NextButton
Pagination.Pages = Pages
Pagination.PrevButton = PrevButton

export { Pagination }
