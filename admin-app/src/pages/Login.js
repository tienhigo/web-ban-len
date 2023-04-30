import React, { useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../features/auth/authSlice';

let schema = Yup.object().shape({

  email: Yup.string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required"),

});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(login(values))
      // alert(JSON.stringify(values, null, 2));
    },
  });
  const authState = useSelector((state) => state);
  const { user, isLoading, isError, isSuccess, message } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      navigate("admin");
    }
    else {
      navigate("");
    }

  }, [user, isError, isLoading, isSuccess]);
  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3'>
        <h3 className='text-center title'>Login</h3>
        <p className='text-center'>Login to ur account to continue</p>
        <div className='error text-center'>
          {message.message == "Rejected" ? "You are not an admin" : ""}
        </div>
        <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="email"
            label="Email"
            id="email"
            val={formik.values.email}
            onChg={formik.handleChange("email")}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            id="pass"
            val={formik.values.password}
            onChg={formik.handleChange("password")} />
          <div className="error">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
       
          <button
            className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
            style={{ background: "#ffd333" }}
            type='submit'>
            Login
          </button>
        </form>

      </div>

    </div>
  )
}

export default Login