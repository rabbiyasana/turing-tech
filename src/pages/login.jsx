import Button from "../commponents/Button/button";
function Login() {
  return (
    <>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6 ">
            <div class="card text-start">
              <div class="card-body">
                <form action="">
                  <div className="mb-3 mt-4">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                      //   value={values.email}
                      //   onChange={handleChange}
                      style={{ width: "100%" }}
                      className="mt-3"
                    />
                    <p className="error">
                      {/* {errors.email && touched.email && errors.email} */}
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
                      // value={values.password}
                      // onChange={handleChange}
                      style={{ width: "100%" }}
                    />
                    {/* <ToastContainer /> */}
                    <p className="error">
                      {/* {errors.password && touched.password && errors.password} */}
                    </p>
                  </div>
                  <div className="mb-3">
                    <Button text="SignIn" />
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
export default Login;
