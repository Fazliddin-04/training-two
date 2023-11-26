import PropTypes from 'prop-types'

import styles from '../style.module.scss'
import { usePaginationContext } from '../usePaginationContext'
import { Icon } from '@iconify/react'

PrevButton.propTypes = {
  icon: PropTypes.string,
}

function PrevButton({ icon = 'chevron-left', ...props }) {
  const { handleDecrement } = usePaginationContext()
  return (
    <div className={styles.button} onClick={handleDecrement} {...props}>
      <Icon icon={`mdi:${icon}`} />
    </div>
  )
}

export default PrevButton
