import React from 'react'
import img from '../assets/hero-img.png'
import './CSS/herosection.css'

function HeroSection() {
  return (
    <section  id="hero" className="hero d-flex align-items-center section-bg">
    <div className="container">
      <div className="row justify-content-between gy-5">
        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2>Enjoy Your Healthy<br/>Delicious Food</h2>
          <p >Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
          <div className="d-flex" >
            <a href="#book-a-table" className="btn-book-a-table">Book a Table</a>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className=" btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src={img} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection