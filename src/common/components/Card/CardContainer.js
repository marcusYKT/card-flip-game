import React from 'react'
import classNames from 'classnames'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Card.module.scss'
import { Card } from './Card'
import { data } from "./data";

export const CardContainer = ({ children }) => {

  return (
    <Container>
      <Row>
        { data.map((title, i) => <Card title={title} key={i} />) }
      </Row>
    </Container>
  )
}