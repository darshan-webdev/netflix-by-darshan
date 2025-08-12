import React from 'react'
import './footer.css'
import Youtube_icons from '../../assets/youtube_icon.png' 
import Facebook_icons from '../../assets/facebook_icon.png' 
import Instagram_icons from '../../assets/instagram_icon.png' 
import twitter_icons from '../../assets/twitter_icon.png' 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={Youtube_icons} alt="" />
           <img src={Facebook_icons} alt="" />
              <img src={twitter_icons} alt="" />
                 <img src={Instagram_icons} alt="" />
      </div>
      <ul>
         <li>Audio description</li>
         <li>Help center </li>
         <li>gift card</li>
         <li>media center</li>
         <li>Investor relation</li>
         <li>Jobs</li> 
         <li>terms of use </li>
         <li>privacy</li>
          <li>legal notice </li>
           <li>cookie performance</li>
            <li>corporate information</li>
             <li>contact us</li>
      </ul>
      <p className='copy-right-text'>Ⓒ 1997-2025 Netflix Inc...</p>
    </div>
  )
}
export default Footer