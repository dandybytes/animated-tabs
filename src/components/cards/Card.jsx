import React from 'react'
import {motion} from 'framer-motion'

import cardImage from '../../assets/card-image.jpg'
import './Card.css'

const cardVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5
    }
  }
}

const Card = ({id, label}) => (
  <motion.div key={`card-${id}`} variants={cardVariant} className='content-card'>
    <img src={cardImage} alt='view of mountain' />

    <div className='info'>
      <h3>{`${label}`} - From $800</h3>
    </div>
  </motion.div>
)

export default Card
