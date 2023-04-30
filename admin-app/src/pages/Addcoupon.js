import { React, useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createCoupon, getACoupon, updateACoupon, resetState } from '../features/coupon/couponSlice';



let schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    expiry: Yup.date().required("Expiry is required"),
    discount: Yup.number().required("Discount is required"),
})
const Addcoupon = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getCouponId = location.pathname.split('/')[3];
    const newCoupon = useSelector((state) => state.coupon);

    const {
        isSuccess,
        isError,
        isLoading,
        createdCoupon,
        couponName,
        couponDiscount,
        couponExpiry,
        updatedCoupon,

    } = newCoupon;

    const changeDateFormat = (date) => {
        const newDate = new Date(date).toLocaleDateString();
        const [month, day, year] = newDate.split("/");
        return [year, month, day].join("-");
    };

    useEffect(() => {
        if (getCouponId !== undefined) {
            dispatch(getACoupon(getCouponId));


        }
        else {
            dispatch(resetState());
        }
    }, [getCouponId]);
    useEffect(() => {
        if (isSuccess && createdCoupon) {
            toast.success('Coupon Added Successfully!');
        }
        if (isSuccess && updatedCoupon) {
            toast.success('Coupon Updated Successfully!');
            navigate("/admin/coupon-list");

        }
        if (isError && couponName && couponDiscount && couponExpiry) {
            toast.error('Something went wrong!');
        }

    }, [isSuccess, isError, isLoading]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: couponName || "",
            expiry: changeDateFormat(couponExpiry) || "",
            discount: couponDiscount || ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (getCouponId !== undefined) {
                const data = { id: getCouponId, couponData: values };
                dispatch(updateACoupon(data));
                dispatch(resetState());
            }
            else {
                dispatch(createCoupon(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 300);
            }

        },
    });
    return (
        <div>
            <h3 className='mb-4 title'>{getCouponId !== undefined ? "Edit" : "Add"} Coupon</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Coupon Name"
                        name="name"
                        onChg={formik.handleChange('name')}
                        onBlr={formik.handleBlur('name')}
                        val={formik.values.name}
                        id="name"
                    />
                    <div className="error">
                        {formik.touched.name && formik.errors.name}
                    </div>
                    <CustomInput
                        type="date"
                        label="Enter Expiry Time"
                        name="expiry"
                        onChg={formik.handleChange('expiry')}
                        onBlr={formik.handleBlur('expiry')}
                        val={formik.values.expiry}
                        id="expiry"
                    />
                    <div className="error">
                        {formik.touched.expiry && formik.errors.expiry}
                    </div>
                    <CustomInput
                        type="number"
                        label="Enter Discount percent"
                        name="discount"
                        onChg={formik.handleChange('discount')}
                        onBlr={formik.handleBlur('discount')}
                        val={formik.values.discount}
                        id="discount"
                    />
                    <div className="error">
                        {formik.touched.discount && formik.errors.discount}
                    </div>
                    <button
                        className='btn btn-success border-0 rounded-3 my-5'
                        type='submit'>
                        {getCouponId !== undefined ? "Edit" : "Add"} Coupon
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Addcoupon;