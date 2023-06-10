import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

import image from '../images/image.jpeg';
const About = () => {


const navigate = useNavigate();


const [userData,setUserData] = useState({});




const callAboutPage = async()=>{
  try{
    const res = await fetch("/about",{
      method:"GET",
      headers:{
        Accept:"application/json",
        'Content-Type': 'application/json',
        
      },
      credentials:"include"
    });

    const data = await res.json();
    setUserData(data);
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
    callAboutPage();
  },[]);

  const imgstyle = {
   height:"350px",
   width:"350px",
   borderRadius:"50%"
  };

  return (
    <>
     
        <section className="container my-5">
          <div className="row">
            <div className="col-lg-4">
              <img src={image} className="img-fluid rounded-circle mb-3" style={imgstyle} alt="Your pic" />
            </div>
            <div className="col-lg-8">
              <h1 className="mb-3">{userData.name}</h1>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Work:</strong> {userData.work}</p>
              <p><strong>Phone:</strong> {userData.phone}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, magna et vulputate viverra, neque sapien eleifend ipsum, vel consequat metus tortor eu mauris. Fusce vehicula, velit vitae vulputate pretium, tellus lectus vehicula lectus, vel ultricies sapien sem eu eros. Aliquam aliquet tincidunt felis sit amet suscipit. Praesent condimentum nulla id enim cursus, quis accumsan lacus auctor. Praesent nec nulla diam.</p>
            </div>
          </div>
        </section>
      
    </>
  );
  
}

export default About