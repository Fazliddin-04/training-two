import PropTypes from 'prop-types'

import styles from '../style.module.scss'
import { usePaginationContext } from '../usePaginationContext'
import { Icon } from '@iconify/react'

Button.propTypes = {
  icon: PropTypes.string,
}

function Button({ icon = 'chevron-right', ...props }) {
  const { handleIncrement } = usePaginationContext()
  return (
    <div className={styles.button} onClick={handleIncrement} {...props}>
      <Icon icon={`mdi:${icon}`} />
    </div>
  )
}

export default Button
