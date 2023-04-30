import { React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrand, getABrand, updateABrand, resetState } from '../features/brand/brandSlice';



let schema = Yup.object().shape({
    title: Yup.string().required("Brand Title is required"),
})
const Addbrand = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getBrandId = location.pathname.split('/')[3];
    const newBrand = useSelector((state) => state.brand);
    const {
        isSuccess,
        isError,
        isLoading,
        createdBrand,
        brandName,
        updatedBrand,
    } = newBrand;

    useEffect(() => {
        if (getBrandId !== undefined) {
            dispatch(getABrand(getBrandId));

        }
        else {
            dispatch(resetState());
        }
    }, [getBrandId]);

    useEffect(() => {
        if (isSuccess && createdBrand) {
            toast.success('Brand Added Successfully!');
        }
        if (isSuccess && updatedBrand) {
            toast.success('Brand Updated Successfully!');
            navigate("/admin/list-brand");
        }
        if (isError) {
            toast.error('Something went wrong!');
        }

    }, [isSuccess, isError, isLoading]);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: brandName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (getBrandId !== undefined) {

                const data = { id: getBrandId, brandData: values };
                
                dispatch(updateABrand(data));
                dispatch(resetState());

            }
            else {

                dispatch(createBrand(values));
                
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 300);
            }
        },
    });
    return (
        <div>
            <h3 className='mb-4 title'>
                {getBrandId !== undefined ? "Edit" : "Add"} Brand</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Brand Title"
                        name="title"
                        onChg={formik.handleChange('title')}
                        onBlr={formik.handleBlur('title')}
                        val={formik.values.title}
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button
                        className='btn btn-success border-0 rounded-3 my-5'
                        type='submit'>
                        {getBrandId !== undefined ? "Edit" : "Add"} Brand
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Addbrand;