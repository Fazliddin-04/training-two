import PropTypes from 'prop-types'
import { createContext } from 'react'

export const PaginationContext = createContext(undefined)

PaginationProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object,
}

function PaginationProvider({ children, value }) {
  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  )
}

export { PaginationProvider }
