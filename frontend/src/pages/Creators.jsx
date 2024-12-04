import axios from "axios";
import React, { useEffect, useState } from "react";

function Creators() {
  const [creators, setCreators] = useState([]);
  console.log(creators);
  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/users/admins",
          {
            withCredentials: true,
          }
        );
        setCreators(data.admins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreators();
  }, []);

  return (

    <>
    <div className="Blog" style={{height: '100vh'}}>
  <div className="Blog-image2">
    <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="Blog image 1" />
    <h6>26 November</h6>
    <h1>ANJUM RAJ</h1>
    <h1><a href="https://www.instagram.com/ankit_baiyanpuria/?hl=en">INSTAGRAM</a></h1>
    <p>Follow Anjum Raj for more updates and insights.</p>
    <div className="social-links">
      <a href="https://www.instagram.com/ankit_baiyanpuria/?hl=en">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" width="30" height="30" />
      </a>
      <a href="https://twitter.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Twitter_Logo_2021.svg/1200px-Twitter_Logo_2021.svg.png" alt="Twitter" width="30" height="30" />
      </a>
      <a href="https://facebook.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" width="30" height="30" />
      </a>
    </div>
  </div>

  <div className="Blog-image2">
    <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="Blog image 2" />
    <h6>26 November</h6>
    <h1>WHAT TO WEAR IN WINTERS</h1>
    <p>Discover the perfect winter fashion tips and trends.</p>
    <div className="social-links">
      <a href="https://www.instagram.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" width="30" height="30" />
      </a>
      <a href="https://twitter.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Twitter_Logo_2021.svg/1200px-Twitter_Logo_2021.svg.png" alt="Twitter" width="30" height="30" />
      </a>
      <a href="https://facebook.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" width="30" height="30" />
      </a>
    </div>
  </div>

  <div className="Blog-image2">
    <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="Blog image 3" />
    <h6>26 November</h6>
    <h1>WHAT TO WEAR IN WINTERS</h1>
    <p>Get tips for staying warm and stylish this winter season.</p>
    <div className="social-links">
      <a href="https://www.instagram.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" width="30" height="30" />
      </a>
      <a href="https://twitter.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Twitter_Logo_2021.svg/1200px-Twitter_Logo_2021.svg.png" alt="Twitter" width="30" height="30" />
      </a>
      <a href="https://facebook.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" width="30" height="30" />
      </a>
    </div>
  </div>

  <div className="Blog-image2">
    <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="Blog image 4" />
    <h6>26 November</h6>
    <h1>WHAT TO WEAR IN WINTERS</h1>
    <p>Check out the must-have winter outfits for the season.</p>
    <div className="social-links">
      <a href="https://www.instagram.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" width="30" height="30" />
      </a>
      <a href="https://twitter.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Twitter_Logo_2021.svg/1200px-Twitter_Logo_2021.svg.png" alt="Twitter" width="30" height="30" />
      </a>
      <a href="https://facebook.com">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" width="30" height="30" />
      </a>
    </div>
  </div>
</div>

    
      
    {/* <div className="Blog">
     <div className="Blog-image">
      <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="" />
      <h6>26 November</h6>
      <h1>WHAT TO WEAR IN WINTERS</h1>
       </div>
     <div className="Blog-image">
      <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="" />
      <h6>26 November</h6>
      <h1>WHAT TO WEAR IN WINTERS</h1>
       </div>
     <div className="Blog-image">
      <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="" />
      <h6>26 November</h6>
      <h1>WHAT TO WEAR IN WINTERS</h1>
       </div>
     <div className="Blog-image">
      <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="" />
      <h6>26 November</h6>
      <h1>WHAT TO WEAR IN WINTERS</h1>
       </div> */}
    {/* </div>    */}
    
    </>
  );
}

export default Creators;
