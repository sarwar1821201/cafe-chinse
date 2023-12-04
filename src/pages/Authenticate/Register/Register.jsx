import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-3xl font-bold">Please Register</h1>
    </div>

    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name'  placeholder="enter Your Name" className="input input-bordered" required />
        </div>

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
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name='photo' placeholder="photo url" className="input input-bordered"  />
        </div>

        <div className="form-control mt-2">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

           {/* link login */}
           <Link to='/login' >
      <button className="btn btn-link m-2">Already Have Account? Please Login  </button>
      </Link>

    </div>
  </div>
</div>
        </div>
    );
};

export default Register;