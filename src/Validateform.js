
   
// // import { useState } from "react";
// // import "./App.css";
// // import FormInput from "./FormInput";

// // const Validateform = ({Login,error}) => {
// //   const [values, setValues] = useState({
// //     username: "",
// //     password: "",
    
// //   });

// //   const inputs = [
// //     {
// //       id: 1,
// //       name: "username",
// //       type: "text",
// //       placeholder: "Username",
// //       errorMessage:
// //         "Username should be 3-16 characters and shouldn't include any special character!",
// //       label: "Username",
// //       pattern: "^[A-Za-z0-9]{3,16}$",
// //       required: true,
// //     },
    
    
// //     {
// //       id: 2,
// //       name: "password",
// //       type: "password",
// //       placeholder: "Password",
// //       errorMessage:
// //         "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
// //       label: "Password",
// //       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
// //       required: true,
// //     },
    
// //   ];

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     Login(values);
// //   };

// //   const onChange = (e) => {
// //     setValues({ ...values, [e.target.name]: e.target.value });
// //   };

  

// //   return (
// //     <div className="app">
// //       <form onSubmit={handleSubmit}>
// //       <h2>Login</h2>
// //           {(error!='') ? (<div className='error'>{error}</div>): ''} 
        
          
// //         {inputs.map((input) => (
// //           <FormInput
// //             key={input.id}
// //             {...input}
// //             value={values[input.name]}
// //             onChange={onChange}
// //           />
// //         ))}
// //         <button>Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Validateform;

// import { useState } from "react";
// import "./App.css";
// import PWDRequisite from "./PWDRequisite";

// function App() {
//   const[details,setDetails]=useState({username:'',email:''});
//   const[user,setUser]=useState({username:'',email:''});
//   const [password, setPassword] = useState("");
//   const [pwdRequiste, setPWDRquisite] = useState(false);
//   const [checks, setChecks] = useState({
//     capsLetterCheck: false,
//     numberCheck: false,
//     pwdLengthCheck: false,
//     specialCharCheck: false,
//   });

//   const Login = details=>{
//       console.log(details)
//       console.log("Logged in")
//       setUser({
//         username:details.username,
//         password:details.password
//       })
//   }

//   const handleOnChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleOnFocus = () => {
//     setPWDRquisite(true);
//   };

//   const handleOnBlur = () => {
//     setPWDRquisite(false);
//   };

//   const handleOnKeyUp = (e) => {
//     const { value } = e.target;
//     const capsLetterCheck = /[A-Z]/.test(value);
//     const numberCheck = /[0-9]/.test(value);
//     const pwdLengthCheck = value.length >= 8;
//     const specialCharCheck = /[!@#$%^&*]/.test(value);
//     setChecks({
//       capsLetterCheck,
//       numberCheck,
//       pwdLengthCheck,
//       specialCharCheck,
//     });
//   };

//   return (
//     <div className="app">
      
//         <h1>Login Form</h1>
//         {/* {(user.username!='') ?
//          (<div className="welcome">
//              <h1>Welcom,<span>{user.username}</span></h1>
//          <button onClick={Logout}>Logout</button>
//          <div>
//          ):(<PWDRequisite/>)} */}

//          <label>UserName:</label>
//          <input type='text' name='name'/><br/><br/> 
         
//           <label htmlFor="password" className="label">
//             Password:
//           </label>
//           <input
//             className="input-field"
//             id="password"
//             type="password"
//             value={password}
//             onChange={handleOnChange}
//             onFocus={handleOnFocus}
//             onBlur={handleOnBlur}
//             onKeyUp={handleOnKeyUp}
//           />
//         </div>
//         {pwdRequiste ? (
//           <PWDRequisite
//             capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
//             numberFlag={checks.numberCheck ? "valid" : "invalid"}
//             pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
//             specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
//           />
//         ) : null}
//       </div>
//       <button>Login</button>
//       </div>
//      </div>
//   );
// }

// export default App;