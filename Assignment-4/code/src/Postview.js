import React from 'react';
import './Postview.css';
import { useState,useEffect } from 'react';



const Postview=()=> {
  const [data,setData]=useState([])

  // const url="http://localhost:3004/user"
  useEffect(()=>{
    fetch("http://localhost:3004/user")
    .then(request=>request.json())
    .then(response=>setData(response))
  },[])

  return (
    <div className="site-container">

      {/* <h1>hai there oejfiefi</h1> */}
      {console.log(data)}
      <header>
        <nav className='navs'>
          <ul className='nav-list'>
            <h1>InstaClone</h1>
          </ul>
          <ul className='nav-list'>
          <i className="fa fa-camera" ></i>
          </ul>
        </nav>
      </header>
      <section className='card-section'>
            {data.map((cardDetails)=>(
              <div className='card'>
                <div className='card-top'>
                  <div>
                    <h3>{cardDetails.name}</h3>
                    <p>{cardDetails.location}</p>
                  </div>
                  <i class="fa fa-ellipsis-h" ></i>
                </div>
                <div className='car-middle'>
                  <img src={cardDetails.PostImage} alt='img' width="100%"/>
                </div>
                <div className='card-bottom'>
                  <div className='card-b-top'>
                    <div className='right'>
                    <div>
                    <i class="fa fa-heart" ></i>
                    <p>{cardDetails.likes} likes</p>
                    </div>
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    </div>

                    <p>21 dvec 2021</p>
                     </div>
                     <div className='card-b-b'>
                      <h3>{cardDetails.description}</h3>
                    </div>
                </div>
              </div>
            ))}
      </section>
      
    </div>
    
  );
}

export default Postview;



