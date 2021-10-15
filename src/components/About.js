import React,{useState} from 'react'
// import { useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import './images/hired.jpeg';

const About = () => {
    const [visibile,setvisibile]=useState("hidden");
    const [data, setdata] = useState({name: "",email: ""});
    const host = "http://localhost:5000"
    // let history = useHistory();
    const showdetails= async (e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/getuser`, {
            
        method: 'POST',
        headers: {
            'auth-token': localStorage.getItem("token"),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: data.name,email: data.email})
    });
    const json = await response.json()
    console.log(json);
    setdata(json);
   setvisibile("visible");
   console.log(visibile);
    // <h1>lowda<h1/>
        // console.log(user.name);
        // style={visibility: "initial"}
    }
    return (
        <>
        {/* <div>
          background image="https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
        </div> */}
        
        <div className="main my-4">
           <button style={{width: '22%',color: 'black'}} onClick={showdetails} type="button" className="btn btn-outline-primary">Click Here To Get Your Details </button>
 {/* <h1>{data.name}</h1>
 <h1>{data.email}</h1> */}
         
        </div>
        <div>
          
        <Card style={{ width: '18rem',visibility : visibile }}>
  {/* <Card.Body> */}
    <Card.Title >Your Details :</Card.Title>
    <Card.Subtitle className="mb-2 my-2" style={{fontFamily:'fantasy'}}>Name :{data.name}</Card.Subtitle>
    <Card.Subtitle className="mb-2 my-2" style={{fontFamily:'fantasy'}}>Email :{data.email}</Card.Subtitle>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  {/* </Card.Body> */}
</Card>
        </div>
        </>
    )
    
}

export default About
