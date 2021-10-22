import React from 'react'

import './CardBoard.css'

import Card from './Card'

const cards = [
  {id: 'yosemite', label: 'Yosemite'},
  {id: 'new-york', label: 'New York'},
  {id: 'chicago', label: 'Chicago'},
  {id: 'miami', label: 'Miami'}
]

const CardBoard = () => (
  <div className='cards'>
    {cards.map(card => (
      <Card key={card.id} id={card.id} label={card.label} />
    ))}
  </div>
)

export default CardBoard
