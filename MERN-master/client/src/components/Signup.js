import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
  });
let name,value;
  const handleInputs =(e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }

const PostData = async(e) =>{
  e.preventDefault();
  const { name,email,phone,work,password,cpassword} = user;
  const res = await fetch('/register',{
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({name,email,phone,work,password,cpassword})
  });

  if (res.status === 422) {
    const errorData = await res.json();
    window.alert(`Invalid registration: ${errorData.message}`);
    console.log('Invalid registration:', errorData.message);
  } else if (res.ok) {
    const data = await res.json();
    window.alert('Registration Successfull');
    console.log('Registration Successful', data);
    navigate('/login');
  }


}


  return (
    <div>


    <section>

      <div className='signup' >

      <form method='POST'>
  <div className="mb-2">
    <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
    <input type="email" name="email" value={user.email} className="form-control" id="exampleInputEmail" onChange={handleInputs} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-2">
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="name" name="name" value={user.name} onChange={handleInputs} className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-2">
    <label htmlFor="exampleInputWork" className="form-label">Work</label>
    <input type="name" name="work" value={user.work} onChange={handleInputs} className="form-control" id="exampleInputWork"/>
  </div>
  <div className="mb-2">
    <label htmlFor="exampleInputPhone" className="form-label">Phone No.</label>
    <input type="phone" name="phone" value={user.phone} onChange={handleInputs} className="form-control" id="exampleInputPhone"/>
  </div>
 
  <div className="mb-2">
    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
    <input type="password1" name="password" value={user.password} onChange={handleInputs} className="form-control" id="exampleInputPassword"/>
  </div>
  <div className="mb-2">
    <label htmlFor="exampleInputCpassword1" className="form-label">Confirm Password</label>
    <input type="password" name="cpassword" value={user.cpassword} onChange={handleInputs} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" onClick={PostData} className="button">Register</button>
</form>

      </div>

    </section>


    </div>
  )
}

export default Signup