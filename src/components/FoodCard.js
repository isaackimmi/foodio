import React from 'react'
import {Card} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'
import './FoodCard.css'
function FoodCard(props){
  return(
    <>
              <Card className ="CardStyle"  >
                         <Card.Img variant="top" className= "imageStyle" src ={props.image} />
                           <Card.Body>
                             <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                Eat eat eat eat eat eat eat eat eat
                             </Card.Text>
                             <Card.Footer>
                                 Star Rating
                             </Card.Footer>
                        </Card.Body>
                           </Card>
  
         
   
    </>
  )
}

export default FoodCard;
