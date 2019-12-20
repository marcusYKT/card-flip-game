import React from 'react'
import { Col, Row } from 'react-bootstrap'
import classNames from 'classnames'
import styles from './Card.module.scss'

export const Card = ({ title, onClick, isFlipped }) => {

  const cardClassName = classNames(styles.content, {
    [styles['card--is-flipped']]: isFlipped
  })

  return (
    <Col sm="3">
      <div className={classNames([styles['card']])}>
        <Row>
          <Col>
            <button onClick={onClick}>
              <p className={cardClassName}>
                { title }
              </p>
            </button>
          </Col>
        </Row>
      </div>
    </Col>
  )
}