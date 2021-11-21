import React from 'react'
import {Card} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'
import './FoodCard.css'
function FoodCard(props){
  return(
    <>

              <Card className ="CardStyle" >
           
                        <Card.Img src ={props.image} className="imageStyle"/>
                    
                    

                           <Card.Body>
                             <Card.Title>{props.title}</Card.Title>
                            <Button className="foodTagStyle">
                              {props.tag}
                              </Button>
                            <Card.Text>
                                Some description 
                             </Card.Text>
                             <div >
                             <Card.Img className="starStyle" variant = "bottom" src="https://static.vecteezy.com/system/resources/thumbnails/002/450/568/small/five-stars-rating-icon-vector.jpg"/>
                              <span className="textStyle">
                                {props.distance}
                              </span>
                               </div>
                   
                        </Card.Body>
                           </Card>
  
         
   
    </>
  )
}

export default FoodCard;
