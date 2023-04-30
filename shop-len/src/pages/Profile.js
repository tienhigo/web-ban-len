import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container';
import {useFormik} from 'formik'
import * as yup from "yup"
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/user/userSlice';
import {FiEdit} from "react-icons/fi"
const profileSchema = yup.object({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    email: yup.string().email("Email should be valid").required("Email is required"),
    mobile: yup.string().required("Mobile is required"),
 
});


const Profile = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state=>state.auth.user)
    const [edit, setEdit] = useState(true)
    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            firstname: userState?.firstname,
            lastname: userState?.lastname,
            email: userState?.email,
            mobile: userState?.mobile,
         
        },
        validationSchema: profileSchema,
        onSubmit: (values) => {
        dispatch(updateProfile(values))
        setEdit(true)
        },
    });
  return (
    <>
    <BreadCrumb title ="My Profile"/>
    <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className='my-3'>Update Profile</h3>
                    <FiEdit className='fs-3' onClick={()=>setEdit(false)}/>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>
            <form onSubmit={formik.handleSubmit}>
            <div class="mb-3">
    <label htmlFor="example1" class="form-label">First Name</label>
    <input type="text" name="firstname" class="form-control" disabled={edit} id="example1"
    value={formik.values.firstname}
    onChange={formik.handleChange('firstname')}
    onBlur={formik.handleBlur('firstname')}

    />
    <div className="error">
        {formik.touched.firstname && formik.errors.firstname}
    </div>
  </div>
  <div class="mb-3">
    <label htmlFor="example2" class="form-label">Last Name</label>
    <input type="text" name="lastname" class="form-control" disabled={edit} id="example2"
      value={formik.values.lastname}
      onChange={formik.handleChange('lastname')}
      onBlur={formik.handleBlur('lastname')}/>
      <div className="error">
        {formik.touched.lastname && formik.errors.lastname}
    </div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" disabled={edit} id="exampleInputEmail1" aria-describedby="emailHelp"
    value={formik.values.email}
    onChange={formik.handleChange('email')}
    onBlur={formik.handleBlur('email')}/>
      <div className="error">
        {formik.touched.email && formik.errors.email}
    </div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail2" class="form-label">Phone number</label>
    <input type="number" name="mobile" class="form-control" disabled={edit} id="exampleInputEmail2" aria-describedby="emailHelp"
    value={formik.values.mobile}
    onChange={formik.handleChange('mobile')}
    onBlur={formik.handleBlur('mobile')}/>
        <div className="error">
        {formik.touched.mobile && formik.errors.mobile}
    </div>
  </div>
  

  {
    edit===false && <button type="submit" class="btn btn-primary">Save</button>
  }
</form>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Profile