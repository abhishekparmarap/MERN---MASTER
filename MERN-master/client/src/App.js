//import logo from './logo.svg';
import './App.css';
import { createContext,useReducer } from 'react';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css'
import { initialState,reducer } from './reducer/Usereducer';
import Logout from './components/Logout';
import ErrorPage from './components/ErrorPage';
export const UserContext = createContext();

const Routing = () =>{
  {
    //routes repalces switches in react v6 
    //we use switch and routes to navigate at only one page ata time
    // it doesnt matters how many paths are delared here
    
   }
   return (
   <Routes>  
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />

    <Route path="*" element={<ErrorPage />} />
</Routes>
   )
};
function App() {


  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   <>
<UserContext.Provider value = {{state,dispatch}}>
   <Navbar/>
   <Routing/>
   
</UserContext.Provider>
   </>

  );
}

export default App;
