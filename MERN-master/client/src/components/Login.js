import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
const Login = () => {

  const {state,dispatch} = useContext(UserContext);



  const navigate=useNavigate();
  const [user,setUser] = useState({
    email:"",
    password:""
  });

  let name,value;

  const handleInputs =(e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }



  const loginUser = async(e)=>{
    e.preventDefault();
    const { email,password} = user;

    const res = await fetch('/signin',{
    method:'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email,password})

  });
    if (res.status === 400 || !res.json) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({type:"USER",payload:true})
      window.alert('Login Successfully');
      
      navigate('/');
    }
  }


  return (
    <div className='signin'>

<form method='POST'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' value={user.email} onChange={handleInputs} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Enter Email Address.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' value={user.password} onChange={handleInputs}
     className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" onClick={loginUser} className="btn btn-primary">Login</button>
</form>

    </div>
  )
}

export default Login