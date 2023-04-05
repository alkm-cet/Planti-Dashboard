import React from 'react'
import Video from '../video/video.mp4'
import plantpot from '../images/plantpot.jpg'
import plantpot2 from '../images/plantpot2.png'

function Midbar() {
  return (
    <div className='Midbar'>

      <div className="videocontainer">
        <div className="videodiv">
          <video autoPlay loop muted>
            <source src={Video} type='video/mp4' />
          </video>
        </div>
        <b><h2>Create and sell extraordinary products</h2></b>
        <p>The world's fast growing industry todey are natural made products!</p>
        <div className="midbarbtndiv">
          <button className='midbarexploreBTN'>Explore More</button>
          <button className='midbarsellersBTN' style={{background:'transparent',color:'white',border:'2px solid white'}}>Top Sellers</button>
        </div>
      </div>

      <div className="Mystatcontainer">
        <h2>My Stat</h2>
        <div className='statmid'>
          <div className="statmidleft"><p>Today</p><p style={{ color: 'rgb(110, 141, 64)' }}>4 Orders</p> </div>
          <div className="statmidright"><p>This Mount</p><p style={{ color: 'rgb(110, 141, 64)' }}>175 Orders</p></div>
        </div>
        <h4>Go to my orders
          <span class="material-symbols-outlined">
            arrow_forward
          </span>
        </h4>

        <img className='mystatplantpotimg' src='https://i.pinimg.com/originals/75/46/26/754626fc5b6a12ae02a75a4b6a255e22.png' alt="" />
      </div>

      <img className='lambader' src="https://shop.morevdesign.com/images/thumbs/0006214_siyah-egik-basli-lambader_600.png" alt="" />

    </div>
  )
}

export default Midbar