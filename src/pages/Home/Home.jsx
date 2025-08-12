import React from 'react'
import './home.css'
import hero from '../../assets/hero_banner.jpg'
import Navbar from '../../components/navbar/Navbar'
import hero_cap from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/Title-cards/TitleCards'
import Footer from '../../components/Footer/Footer.jsx'
const Home = () => {
  return (
    <div className="homepage">

<Navbar />
    <div className="hero">
      <img src={hero} alt="" className='banner-img' />
      <div className="hero-caption">
        <img src={hero_cap} alt="" className='caption' />
        <p> In a city where secrets lurk in every shadow, Detective Arjun is forced to confront his past when a series of mysterious disappearances shakes the community. As he dives deeper, he uncovers a dangerous game of betrayal, love, and survival. Every clue brings him closer to the truth — and to a choice that could change everything.

</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" /> play</button>
             <button className='dark btn'><img src={info_icon} alt="" /> more info</button>
          </div>
            <TitleCards/>
      </div>
    
    </div>
    <div className="more-cards">
          <TitleCards title={"blockbuster-movie"} category={"top_rated"}/>
              <TitleCards  title={"only on netflix"} category={"popular"}/>
                  <TitleCards  title={"UPCOMING"} category={"upcoming"}/>
                    <TitleCards  title={"top pick for you"} category={"now_playing"}/>
                  
    </div>
    <Footer/>
    </div>
  )
}

export default Home