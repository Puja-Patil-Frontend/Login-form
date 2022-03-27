import { useState } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import PWDRequisite from './PWDRequisite';
// import Validateform from './Validateform';

function App() {
  const adminuser = {
    username:'',
    password:''
  }

  const[user,setUser]=useState({username:'',email:''});
  const[error,setError]=useState('');

  
  const Login =details =>{
    console.log(details)

    if(details.username == adminuser.username && details.password == adminuser.password)
    {
      console.log("Logged in")
      setUser({
        username:details.username,
        password:details.password
      })
    }
  //  if(details.password.length<=8)
  //   {
      
  //       setError('password should be min 8')
        

  //   }
  //   else if(details.password.regex)
  //   {
  //      setError('password should contain special one character')
       
  //   }
  //   else if(details.password.charAt(0).toUpperCase()+details.password.slice(1))
  //   {
  //     setError('First letter should be capitail')
      
  //   }
    
    else{
      // console.log("Username or Password does not match")
      setError('Username or Password does not match');
    }


  }

  const Logout = ()=>{
    setUser({username:'',password:''})
  }


  return (
    <div className="App">
      <h1>Login Form</h1>
      {(user.username != '') ? (
        <div className='welcome'>
            <h1>welcome,<span>{user.username}</span></h1>
            <button onClick={Logout}>Logout</button>
           </div>
      ) : (
        <LoginForm  Login={Login}  error={error} />
        
        
      )}
     
    </div>
  );
}

export default App;
