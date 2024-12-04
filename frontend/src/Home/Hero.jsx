import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import './Hero.css'; 
function Hero() {
  const { blogs } = useAuth();
  console.log(blogs);
  return (
    <>
    <div className="container2 ">
      <div className="part2 ">
        <div className="img">
          <img 
            src="http://www.theunstitchd.com/wp-content/uploads/2015/06/shoes.jpg"
            alt="Fashionable Man" 
          />
        </div>
        <div className="part2-Content ">
          <div className="part2-h">
          <h1 className="h">A fashion blogging makes your looks</h1>
          </div>
          <h2>We believe fashion is more than just clothes; it's a form of self-expression, an art, and an exciting way to showcase your personality. Whether you’re a trendsetter, a minimalist, or someone who loves experimenting with bold looks, we’ve got something for everyone. Our mission is to inspire you to dress with confidence, creativity, and style! Fashion isn't just a statement; it's a revolution fashion isn't just a statement; it's a revolution. Every outfit is a declaration of power, every stitch is a battle cry, and every trend is a movement that shapes the world. To wear clothes is to wear the future.</h2>
          <form action="" className="part2-form">
          <input type="email" placeholder="Enter Your Email Here" />
          <Link to='/contact'><button>CONTACT  US</button></Link>
          </form>
          
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Hero;