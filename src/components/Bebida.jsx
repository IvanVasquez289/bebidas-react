import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
const Bebida = ({bebida}) => {
  console.log(bebida)
  const {handleClickModal} = useBebidas()
  return (
    <Col md={6} lg={3} className='mb-3 mt-4'>
        <Card>
            <Card.Img variant="top" src={bebida.strDrinkThumb} />
            <Card.Body>
                <Card.Title>{bebida.strDrink}</Card.Title>
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}
                <Button 
                  variant="warning" 
                  className='w-100 text-uppercase mt-2 '
                  onClick={ ()=> {
                    handleClickModal()
                  }}
                  >
                    Ver receta
                </Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default Bebida