import React from 'react'
import {motion} from 'framer-motion'

import CardBoard from '../cards/CardBoard'

const tabPanelVariant = {
  active: {
    display: 'block',
    transition: {
      staggerChildren: 0.2
    }
  },
  inactive: {
    display: 'none'
  }
}

const TabContent = ({id, active}) => (
  <motion.div
    role='tabpanel'
    id={id}
    className='tab-panel'
    variants={tabPanelVariant}
    animate={active ? 'active' : 'inactive'}
    initial='inactive'
  >
    <CardBoard />
  </motion.div>
)

export default TabContent
