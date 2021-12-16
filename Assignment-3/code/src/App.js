import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow="<"
const obj={Name:"Auston Atlas",EmployeeId:"Id100001" ,Appointment:"6:00 (16-12-2021)",email:"email@email.com",phone:"+919900990099"}
function App() {
  console.log(obj)
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='hed common'>
    <i className="fa fa-angle-left" ></i>
      <div className='box'>
        <h3>Alan Ford</h3>
        <p>00001534</p>
        </div>
        <button type='button'>print</button>
    </div>
    <div className='customer-info '>
      <h3>Appointment : <span>{obj.Appointment}</span></h3>
      <h3>EmployeeId :<span>{obj.EmployeeId}</span></h3>
      <h3>Email :<span>{obj.email}</span></h3>
      <h3>Phone :<span>{obj.phone}</span></h3>
    </div>
    <div className='order-info common'>
      <div className='li'>
        <h3>Status</h3>
        <ul><li>in progress</li></ul>
      </div>
      <div>
        <h3>Door</h3>
        <p>Mark</p>
      </div>
      <div>
        <h3>Time</h3>
        <p>{obj.Appointment}</p>
        </div>
    </div>
      <div className='product-list common'>
        <div className='rect'><i class="fa fa-square-o" aria-hidden="true"></i></div>
        <div className='person'>
          <div className='img'>
          <img src='https://www.w3schools.com/howto/img_avatar.png' alt='user'/>
          </div>
          <div className='info'><h3>{obj.Name}</h3><p>lheufu4fg fbufg 3y kedehufh</p></div>
        </div>
        <div ><i className="fa fa-angle-right" ></i></div>
      </div>
    </div>
  );
}

export default App;
