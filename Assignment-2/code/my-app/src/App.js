import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    console.log(employee)

return(
  <div className="container">
  {/* Start your React code here */}
      <img className ="logo1" alt="face" src={employee.profileImg}/>
    <h1 className= "name">{employee.name}</h1>
    <h3 className="on1">Location</h3>
    <p className="on2">{employee.location}</p>
    <h3 className="on1">Blood Group</h3>
    <p className="on2">{employee.bloodGroup}</p>
    <h3 className="on1">Age</h3>
    <p className="on2">{employee.age}</p>
</div>
)
}




export default App;
