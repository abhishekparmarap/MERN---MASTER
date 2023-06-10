import React from 'react'
import { useState,useEffect } from 'react';
const Home = () => {

const [userName,setUserName] = useState();
const [show,setShow] = useState(false);

  const userHomePage = async()=>{
    try{
      const res = await fetch("/getdata",{
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
          
        },
      });
  
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);
  
  
    }catch(err){
      
      console.log(err);
    }
  }
    useEffect(()=>{
      userHomePage();
    },[]);
  
  




  const styles = {
    welcome: {
      marginTop:'100px',
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#4A4A4A',
      textAlign: 'center',
      marginBottom: '20px',
      textShadow: '1px 1px 1px #000000',
    },
    mernDevelopers: {
      fontSize: '24px',
      color: '#555555',
      fontStyle: 'italic',
      textAlign: 'center',
      lineHeight: '1.5',
      textShadow: '1px 1px 1px #ffffff',
    },
  };


  return (
    <div>
      <div style={styles.welcome}>Farmers Help</div>
      {/* <div style={styles.mernDevelopers}>{ show ? "Happy to see you back":"we are the mern developers"}</div> */}
    </div>
  );
};

export default Home