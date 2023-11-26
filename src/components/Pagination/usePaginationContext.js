import React from 'react'
import { PaginationContext } from './PaginationContext'

function usePaginationContext() {
  const context = React.useContext(PaginationContext)
  if (context === undefined) {
    throw new Error(
      'usePaginationContext must be used within a PaginationProvider'
    )
  }
  return context
}

export { usePaginationContext }
