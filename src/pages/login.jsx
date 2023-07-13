// import React from "react";
// import Navbar from "../commponents/navbar/navbar";
// import { Link, useNavigate, Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// import { useFormik } from "formik";
// import * as Yup from "yup";

// // define schema
// const schema = Yup.object().shape({
//   email: Yup.string()
//     .required("Email is a required field")
//     .email("Invalid email format"),
//   password: Yup.string().required("Password is a required field"),
// });

// export default function Login() {
//   const { loggedIn, setLoggedIn } = useAuth();
//   const navigate = useNavigate();

//   const { errors, handleChange, handleSubmit, touched, values } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: schema,
//     onSubmit: (values, { resetForm }) => {
//       localStorage.setItem("email", values.email);
//       localStorage.setItem("password", values.password);
//       setLoggedIn(true);

//       localStorage.setItem("loggedIn", JSON.stringify(true));

//       // navigate("/home");
//     },
//   });
//   if (loggedIn === true) {
//     // successNotify();
//     return <Navigate to="/home" replace={true}></Navigate>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div className="row d-flex justify-content-center">
//           <div className="col-sm-6">
//             <div className="card text-start">
//               <div className="card-body">
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3 mt-4">
//                     <label htmlFor="email">Email</label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="text"
//                       placeholder="Enter your email"
//                       value={values.email}
//                       onChange={handleChange}
//                       style={{ width: "100%" }}
//                       className="mt-3"
//                     />
//                     <p className="error">
//                       {errors.email && touched.email && errors.email}
//                     </p>
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="password">Password</label>
//                     <input
//                       className="mt-3"
//                       id="password"
//                       name="password"
//                       type="password"
//                       placeholder="Enter your password"
//                       value={values.password}
//                       onChange={handleChange}
//                       style={{ width: "100%" }}
//                     />
//                     <p className="error">
//                       {errors.password && touched.password && errors.password}
//                     </p>
//                   </div>

//                   <div className="mb-3">
//                     <button
//                       type="submit"
//                       style={{ backgroundColor: "#4F46F8", color: "#fff" }}
//                     >
//                       Login
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useCallback } from "react";
import Navbar from "../commponents/navbar/navbar";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { Login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await Login(username, password);
      setUsername("");
      setPassword("");
    },
    [Login, username, password]
  );
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6">
            <div className="card text-start">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mt-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control mt-3"
                      id="email"
                      required
                      value={username}
                      placeholder="email"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                      required
                      type="password"
                      className="form-control mt-3"
                      id="password"
                      value={password}
                      placeholder="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
