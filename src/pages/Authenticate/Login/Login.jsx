import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';



const Login = () => {
    
 // const [error, setError] =useState('')
   const [show, setShow] = useState(false);
   const [success, setSuccess] = useState('')
    const {signIn, signInWithGoogle } =  useContext(AuthContext);

       const handleLogin= (event) => {

          event.preventDefault();
          const email= event.target.email.value;
          const password= event.target.password.value;

          console.log(email,password)
           setSuccess('')

          signIn(email,password)
          .then( (result) =>{
            
            const loggedUser= result.user;
            console.log(loggedUser)
            setSuccess('congratulation!! user successfully login')
            event.target.reset ();
           // navigate(from ,{replace: true})

          })

          .catch( (error)=>{
             console.log(error.message)
             setSuccess('')
          })
       }

      const handleGoogleSignIn = () => {
         console.log('google diye login koro')
         signInWithGoogle()
         .then( (result) => {
           const user= result.user;
           console.log(user)

         } )
         .catch( (error) => {
          console.log('error' ,  error.message)
         } );
      }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-3xl font-bold">Login now!</h1>
      
    </div>

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}  >

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="enter your email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={show? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
          <p className='mt-2' onClick={()=> setShow(!show) } > 
         
            {
                    show ?  <h5>Hide Password</h5> : <h5>Show Password</h5>
                }
          </p>

        </div>

        <div className="form-control mt-2">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
       
      <p className='mt-2 mb-3 text-red-700' > {success} </p>

      {/* link register */}
      <Link to='/register' >
      <button className="btn btn-link m-2">New To This Site? Please Register  </button>
      </Link>

   {/* //sign in with FcGoogle */}
   <button onClick={handleGoogleSignIn} className="btn btn-link m-2 mb-2">  <FcGoogle></FcGoogle> Sign in With Google  </button>
   <button className="btn btn-link m-2 mb-2">  <FaGithubSquare></FaGithubSquare> Sign in With Git-Hub </button>


    </div>
  </div>
</div>
        </div>
    );
};

export default Login;