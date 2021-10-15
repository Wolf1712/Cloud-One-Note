import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import magic from './images/magic.svg'



const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        console.log("hello iam json")
        
            // Save the auth token and redirect
            if(json && json.authtoken){
            localStorage.setItem('token', json.authtoken); 
            history.push("/");
            props.showAlert("Succesfully logged ","success")
            }
            else{
                props.showAlert("invalid credentials","danger")
            }

       
      
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            
            <div>
            <div className="container">
             <div className="login-box">
             <h1>Login</h1>
             <div className="textbox">
              <i className="fa fa-user" aria-hidden="true"></i>
               <input type="text" placeholder="Username" name="email" value={credentials.email} onChange={onChange} />
             </div>
             <div className="textbox">
             
              <i className="fa fa-lock" aria-hidden="true"></i>
              
              <input type="password" placeholder="Password" name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <input className="btn" type="button" value="Sign in" onClick={handleSubmit}/>
            
        </div>
        </div>
        {/* <col > */}
        <div>
            <img className="w-90" src={magic} alt=""/>
            {/* </col> */}</div>
        </div>
    
        </div>
    )
}

export default Login