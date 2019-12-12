import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import classNames from 'classnames'
import styles from './Card.module.scss'

export const Card = ({ title }) => {
  const [isCardFliped, setIsCardFliped] = useState(false)

  const toggleCard = () => {
    setIsCardFliped(!isCardFliped)
  }

  const cardClassName = classNames(styles.content, {
    [styles['card--is-flipped']]: isCardFliped
  })

  return (
    <Col sm="3">
      <div className={classNames([styles['card']])}>
        <Row>
          <Col>
            <button onClick={toggleCard}>Click me</button>
          </Col>
        </Row>
        <Row>  
          <Col>
            <p className={cardClassName}>
              { title }
            </p>
          </Col>
        </Row>
      </div>
    </Col>
  )
}