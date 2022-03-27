import React,{useState} from 'react';
import PWDRequisite from './PWDRequisite';

function LoginForm ({Login, error})
{
    const [details,setDetails]=useState({username:'',password:''})
    const [password,setPassword]=useState('');
    const [PWDRequisite,setPWDRquisite]=useState(false);
    const [checks, setChecks] = useState({
            capsLetterCheck: false,
            numberCheck: false,
            pwdLengthCheck: false,
            specialCharCheck: false,
          });

    const submithandle=e=>{
        e.preventDefault();
        Login(details)
    }

    const handleOnChange=(e)=>{
        setDetails({...details,password:e.target.value})
        
    }

    const handleOnFocus=()=>{
        setPWDRquisite(true);
    }

    const handleOnBlur=()=>{
        setPWDRquisite(false);
    }

    const handleOnkeyUp=(e)=>{
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
                capsLetterCheck,
                numberCheck,
                pwdLengthCheck,
                specialCharCheck,
            });
        };
    

    return(
        <form onSubmit={submithandle}>
           <h2>Login</h2>
          {(error!='') ? (<div className='error'>{error}</div>): ''}  
           <label>UserName-- </label>
           <input type='text' name='name' id='' 
           onChange={e=>setDetails({...details,username:e.target.value})} 
           value={details.name}/><br/><br/>
           <label>Password --</label>
           <input type='password' name='password' id='password' 
        //    onChange={e=>setDetails({...details,password:e.target.value})} 
           onChange={handleOnChange}
           onFocus={handleOnFocus}
           onBlur={handleOnBlur}
           onKeyUp={handleOnkeyUp}
           value={details.password}/>
           
           {PWDRequisite ? (
          <PWDRequisite
            capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
            numberFlag={checks.numberCheck ? "valid" : "invalid"}
            pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
            specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
          />
        ) : null}
           
           <br/><br/>
           <button>Login </button>
           <button>Register</button>
          <input type='reset' value='Reset'></input>

        </form>
    )
}
export default LoginForm;