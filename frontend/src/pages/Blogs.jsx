// import React from "react";
// import { useAuth } from "../context/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";

// function Blogs() {
//    const navigate = useNavigate();
//    const handleBlog = () => {
//       navigate("/blog-details");
//    }

//   return (
//     <>
//     <div className="Blog1">
//        <div className="Blog-image">
//         <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="" />
//         <div className="Blog1-info">
//            <div className="Blog1-h1">
//              <h6>26 November</h6>
//              <h1>WHAT TO WEAR IN WINTERS</h1>
//            </div>
//            <div className="btn1">
//             <button onClick={handleBlog}>READ MORE</button>
//            </div>
//         </div>
//        </div>
//        <div className="Blog-image">
//         <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="" />
//         <div className="Blog1-info">
//            <div className="Blog1-h1">
//              <h6>26 November</h6>
//              <h1>WHAT TO WEAR IN WINTERS</h1>
//            </div>
//            <div className="btn1">
//             <button onClick={handleBlog}>READ MORE</button>
//            </div>
//         </div>
//        </div>
//        <div className="Blog-image">
//         <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="" />
//         <div className="Blog1-info">
//            <div className="Blog1-h1">
//              <h6>26 November</h6>
//              <h1>WHAT TO WEAR IN WINTERS</h1>
//            </div>
//            <div className="btn1">
//             <button onClick={handleBlog}>READ MORE</button>
//            </div>
//         </div>
//        </div>
//     </div> 
//     <div className="Blog1">
//        <div className="Blog-image">
//         <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="" />
//         <div className="Blog1-info">
//            <div className="Blog1-h1">
//              <h6>26 November</h6>
//              <h1>WHAT TO WEAR IN WINTERS</h1>
//            </div>
//            <div className="btn1">
//             <button onClick={handleBlog}>READ MORE</button>
//            </div>
//         </div>
//        </div>
//        <div className="Blog-image">
//         <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="" />
//         <div className="Blog1-info">
//            <div className="Blog1-h1">
//              <h6>26 November</h6>
//              <h1>WHAT TO WEAR IN WINTERS</h1>
//            </div>
//            <div className="btn1">
//             <button onClick={handleBlog}>READ MORE</button>
//            </div>
//         </div>
//        </div>
//        <div className="Blog-image">
//         <img src="https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" alt="" />
//         <div className="Blog1-info">
//            <div className="Blog1-h1">
//              <h6>26 November</h6>
//              <h1>WHAT TO WEAR IN WINTERS</h1>
//            </div>
//            <div className="btn1">
//             <button onClick={handleBlog}>READ MORE</button>
//            </div>
//         </div>
//        </div>
//     </div> 
    
//     </>
    
//   );
// }

// export default Blogs;


import React from "react";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();

  // Array of blog data (images)
  const blogs = [
    { imageUrl: "https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" },
    { imageUrl: "https://www.fashionbeans.com/wp-content/uploads/2022/08/Best-Dress-Shoes-for-Men.jpg "},
    { imageUrl: "https://www.fashionbeans.com/wp-content/uploads/2022/08/LeeJeans_FSBBestTaperedJeans.jpg?format=500w" },
    { imageUrl: "https://www.fashionbeans.com/wp-content/uploads/2021/10/pexels-cottonbro-FSBLifestyle-400x450.jpg?format=500w" },
    { imageUrl: "https://www.fashionbeans.com/wp-content/uploads/2024/10/closedofficial_manwearingthedenimjcaketbyclosed-400x450.jpg?format=500w" },
    { imageUrl: "https://images.squarespace-cdn.com/content/v1/57923b5759cc680b4e32353d/1732653590512-N1K5YEQ3751R2EU503SL/CAPSULE+PREVIEW+copy.002.jpeg?format=500w" }
  ];

  const handleBlog = (imageUrl) => {
    navigate("/blog-details", { state: { imageUrl } });
  }

  return (
    <div className="unique-blog-container">
      <div className="unique-blog-row">
        {blogs.map((blog, index) => (
          <div key={index} className="unique-blog-item">
            <img src={blog.imageUrl} style={{ width: "450px", height: "550px" }}  alt="Blog" />
            <div className="unique-blog-info">
              <div className="unique-btn-container">
                <button onClick={() => handleBlog(blog.imageUrl)}>READ MORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
