import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import image from '../images/image.jpeg';
import { UserContext } from '../App';
const Navbar = () => {
  const {state,dispatch} = useContext(UserContext);

  const RenderMenu = () =>{
      if(state){
        return(
          <>
          <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Contact">Contact</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/Logout">Logout</NavLink>
        </li>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
          </>
        )
      }
      else{
        return (

            <>
            <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Contact">Contact</NavLink>
        </li>
        
        
            <li className="nav-item">
          <NavLink className="nav-link" to="/Signup">Regitration</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Login">Login</NavLink>
        </li>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
            </>

        )
      }
  }
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
        <img className='logo' src={image} style={{
            resizeMode: 'center',
            height: 50,
            width: 50,
          }} alt="logo"/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        

        <RenderMenu/>


      </ul>
      
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar