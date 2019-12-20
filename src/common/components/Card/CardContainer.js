import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import { Card } from './Card'
import { data } from './data'

export const CardContainer = () => {
  // make some empty arrays
  const [clickedCards, setClickedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [isMatch, setMatch] = useState(false)

  useEffect(() => {
    if (data[clickedCards[0]] === data[clickedCards[1]]) {
      // Handle Match Logic
      setMatch(true)
      setMatchedCards([...matchedCards, ...clickedCards])
    }
  }, [clickedCards])

  const handleCardClick = (index) => {
    console.log('clicked')
    // check to make sure to not add duplicate cards & don't add more than two cards
    if (!clickedCards.includes(index) && clickedCards.length < 2) {
      setClickedCards([...clickedCards, index])  
    }
    
    // checks if there two cards, resets clickcards to the cards we only clicked on
    if(clickedCards.length === 2) {
      setClickedCards([index])
    }
  }

  return (
    <Container>
      <Row>
        {
          data.map((title, index) =>
            <Card
              onClick={()=> handleCardClick(index)}
              isFlipped={clickedCards.includes(index) || matchedCards.includes(index)}
              title={title}
              key={index}
            />
          )
        }
      </Row>
    </Container>
  )
}
