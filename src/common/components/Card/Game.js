import React from 'react'

import styles from './Card.module.scss'

import { CardContainer } from './CardContainer'

export const Card = ({ children }) => {
  return (
    <main>
      <h1>Card Matching Game</h1>
      <CardContainer />
    </main>
  )
}