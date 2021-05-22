import React from 'react'
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

function MovieCard({movie}) {
    return (
        <div >
            <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title style={{color:'black'}}>{movie.title}</Card.Title>
    <Card.Text style={{color:'black'}}>
     {movie.description}
    </Card.Text>
    <ReactStars
    value={movie.rate}
    count={5}
    edit={false}
    size={24}
    activeColor="#ffd700"
  />
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
