import PropTypes from 'prop-types'
import { Pagination } from '../Pagination'
import styles from './style.module.scss'

const defaultType = {
  children: PropTypes.node,
}

Table.propTypes = {
  count: PropTypes.number,
  limit: PropTypes.number,
  onChange: PropTypes.func,
  children: PropTypes.node,
}
Cell.propTypes = defaultType
Row.propTypes = defaultType
Head.propTypes = defaultType
Body.propTypes = defaultType

function Table({ count = 0, limit = 10, onChange, children, ...props }) {
  return (
    <div>
      <table {...props}>{children}</table>
      <Pagination count={count} limit={limit} onChange={onChange}>
        <Pagination.PrevButton />
        <Pagination.Pages />
        <Pagination.NextButton />
      </Pagination>
    </div>
  )
}

function Head({ children, ...props }) {
  return (
    <thead className={styles.head} {...props}>
      {children}
    </thead>
  )
}

function Body({ children, ...props }) {
  return <tbody {...props}>{children}</tbody>
}

function Row({ children, ...props }) {
  return <tr {...props}>{children}</tr>
}

function Cell({ children, ...props }) {
  return <td className={styles.cell} {...props}>{children}</td>
}

Table.Cell = Cell
Table.Row = Row
Table.Head = Head
Table.Body = Body

export { Table }
