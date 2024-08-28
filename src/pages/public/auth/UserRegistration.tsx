// Dependencies
import React, { useState } from "react";
// import { useEffect, useRef } from "react"; // TODO: For future use
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// State
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../../../slices/api/userAuthApiSlice";
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
const UserRegistration: React.FC = () => {
  //----------
  // State
  //----------
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  // TODO: Implement later
  // const [avatar, setAvatar] = useState(null); // Store the selected image file
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // Redux Toolkit
  const [userRegistration, { isLoading, error: signUpError }] =
    useSignUpMutation();

  //----------
  // Effects
  //----------
  // TODO: Implement useEffect if needed
  /*
  useEffect(() => {
    if (vendorInfo) {
      navigate("/projects");
    }
  }, [navigate, vendorInfo]); // Dependency Array
  */

  //----------
  // Handlers
  //----------
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // Guard if password and passwordConfirmation don't match
    if (password !== passwordConfirmation) {
      toast.error("Passwords do not match");
      return;
    }

    // SignUp User
    try {
      // Build Form Data
      const formData = new FormData();
      formData.append("user[email]", email);
      formData.append("user[password]", password);
      formData.append("user[password_confirmation]", passwordConfirmation);

      // Call the API
      const res = await userRegistration(formData).unwrap();
      dispatch(setCredentials(res));
      // dispatch(vendorSetCredentials({ ...res })); // Sets Credentials in Redux Store & LocalStorage
      toast.success("Welcome to Kanut | Bookmark Manager!");
      navigate("/dashboard");
    } catch (error) {
      const apiError = error as ApiError;
      const errorMessage =
        apiError?.data?.status?.message ||
        apiError?.error ||
        "An unknown error occurred";
      toast.error(`Registration Error: ${errorMessage}`);
      console.error(`Registration Error: ${errorMessage}`);
    }
  };

  //----------
  // Redux Toolkit Slice Errors
  //----------
  if (signUpError) {
    console.error("Redux signUpError: ", signUpError);
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
            <h1>User Registration</h1>
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

                <div className="row">
                  <div className="col-12 my-2">
                    <label htmlFor="passwordConfirmation">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="passwordConfirmation"
                      id="passwordConfirmation"
                      className="form-control"
                      placeholder="Must match password"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
                {/* ./Submit */}

                <div className="row py-3">
                  <div className="col-12">
                    Already have an account?{" "}
                    <Link to="/users/login" className="f-purple-m f-underline">
                      Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* ./Form */}
      </div>
    </section>
  );
};

export default UserRegistration;
