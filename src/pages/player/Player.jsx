import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'





const Player = () => {

  const {id} =useParams();
  const navigate = useNavigate()
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODU0NGIzN2ZhZTdlZmQ5NDJkMGU4YzRlNWZkOGZjMCIsIm5iZiI6MTc1NDgyOTYzMi40OCwic3ViIjoiNjg5ODkzNDA0Yzk1ZTJiZTlkOGRhNzBlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Jtps2szbjSMYYtqQCrjeiuCkEO84RBwMaLo5RLPlZyg'
  }
};

  const [apidata,setapidata] = useState(
{  name:"",
  key:"",
  published_at:"",
  type:""
}
)
useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapidata(res.results[0]))
  .catch(err => console.error(err));
},[])
  return (
    <div className='player'> 
    <img src={back_arrow}alt=""  onClick={()=>{
      navigate(-2)
    }}/>
<iframe
  src={`https://www.youtube.com/embed/${apidata.key}`}
  frameBorder= "0"
  title='trailer'
  allowFullScreen
  width='90%'
  height='100%'
></iframe>


<div className="player-info">
  <p>{apidata.name }</p>
  <p>{apidata.published_at.slice(0,10)}</p>
    <p>{apidata.type}</p>
</div>
    </div>
  )
}

export default Player