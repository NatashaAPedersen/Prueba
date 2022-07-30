import React from 'react';
import './Card.css';


function Card(props) {
  return (
    <div className='general'>
        <h1 className='h1'>{props.title}</h1>
        <h2>Author: {props.author}</h2>
        <p className='par'>Comments: {props.num_comments}</p>
        <h4>Date: {props.created_at}</h4>
        <button><a href={props.url}>Read More</a></button>
    </div>
  )
}

export default Card