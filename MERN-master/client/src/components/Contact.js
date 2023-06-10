import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {


const navigate = useNavigate();


const [userData,setUserData] = useState({name: "",email:"",message:""});




const userContact = async()=>{
  try{
    const res = await fetch("/getdata",{
      method:"GET",
      headers:{
        'Content-Type': 'application/json',
        
      },
    });

    const data = await res.json();
    console.log(data);
    setUserData({...userData,name:data.name,email:data.email});
    if(!(res.status) === 200){
      const error = new Error(res.error);
      throw error;
    }


  }catch(err){
    
    navigate('/login');
    console.log(err);
  }
}
  useEffect(()=>{
    userContact();
  },[]);


const handleInputs = (e) =>{
const name = e.target.name;
const value = e.target.value;
setUserData({...userData,[name]:value})
}

const ContactForm = async(e)=>{
  e.preventDefault();
  const { name, email, message } = userData;
  const res = await fetch('/contact',{
    method:"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      name,email,message
    })
  });
  const data = await res.json();

  if(!data){
    console.log("message not send");
  }
  else{
    alert("message send");
    setUserData({...userData,message:""});
  }
}

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f1f1f1',
    borderRadius: '10px',
  };

  const labelStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const inputStyle = {
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: 'none',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <form method="POST" style={formStyle} onSubmit={handleInputs}>
      <label style={labelStyle} htmlFor="name">Name:</label>
      <input value={userData.name} onChange={handleInputs} style={inputStyle} type="text" id="name" name="name" required />

      <label style={labelStyle} htmlFor="email">Email:</label>
      <input value={userData.email} onChange={handleInputs} style={inputStyle} type="email" id="email" name="email" required />

      <label style={labelStyle} htmlFor="message">Message:</label>
      <textarea value={userData.message} onChange={handleInputs} style={inputStyle} id="message" name="message" rows="5" required />

      <button style={buttonStyle} type="submit" onClick={ContactForm} >Send message</button>
    </form>
  );
}

export default Contact;
