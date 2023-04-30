import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from '../features/user/userSlice';


const passwordSchema = yup.object({

    password: yup.string().required("Password is required"),


});


const Resetpassword = () => {
    const location = useLocation()
    const getToken = location.pathname.split("/")[2]
    console.log(getToken)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            password: "",
        },
        validationSchema: passwordSchema,
        onSubmit: (values) => {
            dispatch(resetPassword({ token: getToken, password: values.password }))
            navigate("/login")



        },
    });
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title="Reset Password" />
            <Container class1='login-wrapper home-wrapper-2'>

                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>RESET YOUR PASSWORD</h3>
                            <p className='text-center my-2 mb-3'>We will send u an email to reset your password</p>
                            <form onSubmit={formik.handleSubmit} action="" className='d-flex flex-column gap-15'>
                                <CustomInput type='password' name="password" placeholder="Password"
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                    value={formik.values.password} />
                                <div className='error text-center'>
                                    {formik.touched.password && formik.errors.password}
                                </div>


                                <div>

                                    <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                        <button className="button border-0" type="submit">
                                            Reset</button>


                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>




            </Container>
        </>
    )
}

export default Resetpassword