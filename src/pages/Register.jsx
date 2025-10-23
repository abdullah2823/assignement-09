import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-semibold text-2xl pt-5 text-center">
          Login Your Account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="name" required />
            {/* Photo url */}
            <label className="label">Photo Url</label>
            <input name="photo" type="text" className="input" placeholder="Photo URL" required/>

            {/* email */}
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required/>

            {/* password */}
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required/>
            {/* register button */}
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            <p className=" text-center pt-3">
              Allready Have an Account?{" "}
              <Link to={"/auth/login"} className="text-secondary    font-semibold">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
