
import React from 'react';


const Card = () => {

    const myObj ={
        views: "100k"
    }

    const myStyle ={
        color: "red",
        fontSize: "24px"
      }
    return (
        
     <div>
       

       <div className="card w-96 bg-base-100 shadow-xl">
       <div className="card-body">
    <h2 className="card-title title-css">Shoes!</h2>
    <p style={myStyle}>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-info">Buy Now</button>
    </div>
  </div>



  <figure><img src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="Shoes" /></figure>


    
    <p>{myObj.views}</p> 
  
  
</div>
            
        </div>
    );
};

export default Card;