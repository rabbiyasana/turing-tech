// import Button from "../commponents/Button/button";
// import React from "react";
// import Navbar from "../commponents/navbar/navbar";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// import { useFormik } from "formik";
// import * as EmailValidator from "email-validator";
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
//   let navigate = useNavigate();

//   const { errors, handleChange, handleSubmit, touched, values } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: schema,
//     onSubmit: (values, { resetForm }) => {
//       return <Navigate to="/home" replace={true}></Navigate>;

//       //   localStorage.setItem("email", values.email);
//       //   localStorage.setItem("password", values.password);
//       //   setLoggedIn(true);
//       //   localStorage.setItem("loggedIn", JSON.stringify(true));

//       //   resetForm();
//     },
//   });

//   return (
//     <>
//       <Navbar />
//       <div className="container ">
//         <div className="row d-flex justify-content-center">
//           <div className="col-sm-6 ">
//             <div class="card text-start">
//               <div class="card-body">
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
//                     {/* <Button text="SignIn" /> */}
//                     <button
//                       type="submit"
//                       //   className="form-control"
//                       style={{ backgroundColor: "#4F46F8", color: "#fff" }}
//                     >
//                       login
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

import React from "react";
import Navbar from "../commponents/navbar/navbar";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { useFormik } from "formik";
import * as Yup from "yup";

// define schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string().required("Password is a required field"),
});

export default function Login() {
  const { loggedIn, setLoggedIn } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);

      localStorage.setItem("loggedIn", JSON.stringify(true));

      setLoggedIn(true);
      navigate("/home");
    },
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6">
            <div className="card text-start">
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3 mt-4">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      style={{ width: "100%" }}
                      className="mt-3"
                    />
                    <p className="error">
                      {formik.errors.email &&
                        formik.touched.email &&
                        formik.errors.email}
                    </p>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      className="mt-3"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      style={{ width: "100%" }}
                    />
                    <p className="error">
                      {formik.errors.password &&
                        formik.touched.password &&
                        formik.errors.password}
                    </p>
                  </div>

                  <div className="mb-3">
                    <button
                      type="submit"
                      style={{ backgroundColor: "#4F46F8", color: "#fff" }}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
