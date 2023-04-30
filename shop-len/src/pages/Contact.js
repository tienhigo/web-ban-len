import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi"
import Container from '../components/Container';
import * as yup from "yup";
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { createQuery } from '../features/contact/contactSlice';

let contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  mobile: yup.string().default('').nullable().required("Mobile is required"),
  email: yup.string().nullable().email("Email is required"),
  comment: yup.string().default('').nullable().required("Comment is required"),

});
const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      comment: ''
    },
    validationSchema: contactSchema,
    onSubmit: values => {
      dispatch(createQuery({name:values.name,email:values.email, mobile:values.mobile,comment:values.comment}));

    },
  });
  return <>
    <Meta title={"Contact Us"} />
    <BreadCrumb title="Contact Us" />
    <Container class1="contact-wrapper py-5 home-wrapper-2">

      <div className="row">
        <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.521284772695!2d106.78472901455537!3d10.847899760837244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175272a49301c55%3A0xde097a8add7a6926!2zOTcgxJAuIE1hbiBUaGnhu4duLCBIaeG7h3AgUGjDuiwgUXXhuq1uIDksIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1679934239461!5m2!1svi!2s"
            width="600"
            height="450"
            className='border-0 w-100'
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">

          </iframe>

        </div>
        <div className="col-12 mt-5">
          <div className="contact-inner-wrapper d-flex justify-content-between">
            <div>
              <h3 className="contact-title mb-4">Contact</h3>
              <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    onChange={formik.handleChange("name")}
                    onBlur={formik.handleBlur('name')}
                    value={formik.values.name}
                  />
                  <div className='errors'>
                    {
                      formik.touched.name && formik.errors.name
                    }
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur('email')}
                    value={formik.values.email}
                  />
                </div>
                <div className='errors'>
                  {
                    formik.touched.email && formik.errors.email
                  }
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                    name="mobile"
                    onChange={formik.handleChange("mobile")}
                    onBlur={formik.handleBlur('mobile')}
                    value={formik.values.mobile}
                  />
                  <div className='errors'>
                    {
                      formik.touched.mobile && formik.errors.mobile
                    }
                  </div>
                </div>
                <div>
                  <textarea
                    id=""
                    className='w-100 form-control'
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                    name="comment"
                    onChange={formik.handleChange("comment")}
                    onBlur={formik.handleBlur('comment')}
                    value={formik.values.comment}
                  ></textarea>
                  <div className='errors'>
                    {
                      formik.touched.comment && formik.errors.comment
                    }
                  </div>
                </div>
                <div>
                  <button className="button border-0">Submit</button>
                </div>

              </form>
            </div>
            <div>
              <h3 className="contact-title mb-4">Get in touch with us</h3>
              <div>
                <ul className="ps-0">
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <AiOutlineHome className='fs-5' />
                    <address className='mb-0'>97 Man Thien, phuong Tang Nhon Phu A,<br /> Thanh Pho Thu Duc, Thanh Pho Ho Chi Minh</address>
                  </li>

                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiPhoneCall className='fs-5' />
                    <a href="tel:0399942902">0399942902</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <AiOutlineMail className='fs-5' />
                    <a href="mailto:miinyan2001@gmail.com">miinyan2001@gmail.com
                    </a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiInfoCircle className='fs-5' />
                    <p className='mb-0'>Monday - Friday 10 AM -8 PM</p>
                  </li>

                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

    </Container>

  </>
}

export default Contact