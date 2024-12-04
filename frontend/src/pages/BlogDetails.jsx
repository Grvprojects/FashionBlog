import React from 'react'
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {

    const location = useLocation();
    const { imageUrl } = location.state || {}; 

  return (
    <div>
        <div className='Detail-main' style={{height:'100vh'}}>
           <div className='Detail-part1'>
             <div className='Detail-img'>
               {imageUrl && <img src={imageUrl} 
               style={{height:'600px', padding:'10px'}}
               alt="Blog Detail"/>}
             </div>

             <div className='Detail-content'>
               <h1>UNCOVERING THE MOST POPULAR STYLES IN METAL GLASSES</h1>
               <p>Metal glasses have become a go-to style for people seeking traditional yet stylish eyewear for daily requirements. Metal prescription glasses are one of the most commonly searched eyeglasses by men and women. These frames have carved a niche in terms of popularity as they tend to offer you a polished look, enhancing your overall personality. Most people love wearing them as they are apt for a professional setup and go well with formal and semi-formal outfits. Being a popular trend in eyewear, they are a great choice for minimalist fashion. Several people prefer these because they want a pair of eyeglasses that look stylish, and minimalist but are not too eye-catching. Being a sturdy style, metal frames can last you quite long. Some of the most popular celebrities who rocked the look with a pair of metal frames include Thomas Shelly, Harry Potter and Peter Parker. On the whole, metal glasses have been rated at the top in terms of popularity over the past few years. They have evolved as a timeless design, enabling a lot of individuals in the modern era to prefer these conventional eyeglasses as a safe option without risking bolder designs. Not each one of you would prefer a non-conventional style because it might not go with certain occasions. These could be business meetings or other formal events where you wouldn’t want to opt for quirky designs or colourful glasses.
               Exploring the versatility of metal glasses for menMetal frames come in a diverse range of shapes, and styles, allowing you to try the most fashionable glasses to embrace a distinct style matching your needs. Some of the trending options include round metal glasses, semi-rimless metal frames, square metal frames, browline metal frames and so on. One of the most recognised frame styles in metal glasses includes the pilots. Pilot metal glasses have a significant fan following, specifically since Tom Cruise created his own signature style with the Top Gun look. Now, let’s look into the details of the most tempting frame styles and shapes to understand how you can create different looks with each of them.</p>
             </div>
           </div>
        </div>
    </div>
  )
}

export default BlogDetails
