// Dependencies
import React, { useState } from "react";
// import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// State
import { useDispatch } from "react-redux";
import { useSignInMutation } from "../../../slices/api/userAuthApiSlice";
import { setCredentials } from "../../../slices/auth/userAuthSlice";
// Interfaces
import { ApiError } from "../../../interfaces/errors";
// Components
// TODO: Implement FormContainer
// import FormContainer from "../../../components/FormContainer";
import Loader from "../../../components/Loader";
// Styles
import "./Auth.scss";

// Component
const UserLogin: React.FC = () => {
  //----------
  // State
  //----------
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redux Toolkit
  const [userLogin, { isLoading, error: loginError }] = useSignInMutation();

  //----------
  // Effects
  //----------
  // Redirect to dashboard if already logged in
  /*
  useEffect(() => {
    if (vendorInfo) {
      navigate("/dashboard");
    }
  }, [navigate, vendorInfo]); // Dependency Array
  */

  //----------
  // Handlers
  //----------
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Build form data
      const formData = new FormData();
      formData.append("user[email]", email);
      formData.append("user[password]", password);

      // Call the API
      const res = await userLogin(formData).unwrap();
      // res = { user, token }

      // Check if token exists before dispatching
      if (res.token) {
        dispatch(setCredentials(res));
        navigate("/dashboard");
      }
    } catch (error) {
      const apiError = error as ApiError;
      const errorMessage =
        apiError.data?.status?.message ||
        apiError?.error ||
        "An error occurred";
      toast.error(`Login Error: ${errorMessage}`);
      console.error(`Login Error: ${errorMessage}`);
    }
  };

  //----------
  // Redux Toolkit Slice Errors
  //----------
  if (loginError) {
    console.log("Login Errors: ", loginError);
  }

  //----------
  // Output
  //----------
  return (
    <section className="">
      <div className="container">
        {/* Header */}
        <div className="row">
          <div className="col-12 text-center">
            <h1>User Login</h1>
          </div>
        </div>
        {/* ./Header */}

        {/* Form */}
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 offset-md-4 offset-lg-4">
            {/* TODO: Create Component */}
            <div className="form-container">
              <form onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-12 my-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter a valid email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                </div>
                {/* ./Input: Email */}

                <div className="row">
                  <div className="col-12 my-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Min. 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/* ./Input: Password */}

                {isLoading && <Loader />}

                <div className="row">
                  <div className="col-12 text-center">
                    <div className="submit-wrapper">
                      <button
                        type="submit"
                        className="btn btn-primary w-50 my-3"
                        disabled={isLoading}
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </div>
                {/* ./Submit */}

                <div className="row py-3">
                  <div className="col-12">
                    Don't have an account yet?{" "}
                    <Link
                      to="/users/registration"
                      className="f-purple-m f-underline"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
