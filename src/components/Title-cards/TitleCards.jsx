import React, { useEffect, useRef, useState } from 'react'
import './title.css'

import  card_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'
    
const TitleCards = ({title,category}) => {

  const [apidata,setapidata] =useState([])
  const cardsRef=useRef()

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODU0NGIzN2ZhZTdlZmQ5NDJkMGU4YzRlNWZkOGZjMCIsIm5iZiI6MTc1NDgyOTYzMi40OCwic3ViIjoiNjg5ODkzNDA0Yzk1ZTJiZTlkOGRhNzBlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Jtps2szbjSMYYtqQCrjeiuCkEO84RBwMaLo5RLPlZyg'
  }
};


  const  handlewheel =(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category ? category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res =>setapidata(res.results))
  .catch(err => console.error(err));

cardsRef.current.addEventListener('wheel',handlewheel)
  },[])

  
  return (
    <div className='title-card'>
      <h2 >{title ? title:"popular on netflix"} </h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card,index)=>{
     
     return <Link to={`/player/${card.id}`} className="card-item" key={index}>
      <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
      <div className="card">
           <p>{card.original_title}</p>
      </div>
   
     </Link>
        })}
      </div>
    </div>
  )
}



export default TitleCards