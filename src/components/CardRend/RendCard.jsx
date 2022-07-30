import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Rend.css';



function RendCard() {
  const [news, setNews] = useState([]);
  let newsN = news.sort(function(x, y){
    var firstDate = new Date(x.created_at);
    var SecondDate = new Date(y.created_at);
    if (firstDate > SecondDate) return -1;
    if (firstDate < SecondDate) return 1;
    return 0;
  });

  useEffect(()=>{
    fetch(`https://hn.algolia.com/api/v1/search?query=dev`)
    .then((response) => response.json())
    .then((json) => setNews(json.hits))
  }, [setNews])


    return (
    <div>
        <div className='grid-container'>
        {newsN.map(el => (
            <Card key={el.objectID} title={el.title} author={el.author} num_comments={el.num_comments} created_at={el.created_at} url={el.url}/>  
        ) )
}   
        </div>
    </div>
  )
}

export default RendCard