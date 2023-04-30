import { React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createCategory, resetState, updateACategory, getACategory } from '../features/pcategory/pcategorySlice';

let schema = Yup.object().shape({
    title: Yup.string().required("Category title is required"),
})
const Addcat = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getCategoryId = location.pathname.split('/')[3];
    const newCategory = useSelector((state) => state.pcategory);
    const {
        isSuccess,
        isError,
        isLoading,
        createdCategory,
        categoryName,
        updatedCategory,

    } = newCategory;

    useEffect(() => {
        if (getCategoryId !== undefined) {
            dispatch(getACategory(getCategoryId));
        }
        else {
            dispatch(resetState());
        }
    }, [getCategoryId]);




    useEffect(() => {
        if (isSuccess && createdCategory) {
            toast.success('Category Added Successfully!');
        }
        if (isSuccess && updatedCategory) {
            toast.success('Category Updated Successfully!');
            navigate("/admin/list-category");
        }
        if (isError) {
            toast.error('Something went wrong!');
        }

    }, [isSuccess, isError, isLoading]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: categoryName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (getCategoryId !== undefined) {
                const data = { id: getCategoryId, categoryData: values };
                dispatch(updateACategory(data));
                dispatch(resetState());
            }
            else {
                dispatch(createCategory(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 3000);

            }

        },
    });
    return (
        <div>
            <h3 className='mb-4 title'>
            {getCategoryId !== undefined ? "Edit" : "Add"} Category</h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter category"
                        name="title"
                        onChg={formik.handleChange('title')}
                        onBlr={formik.handleBlur('title')}
                        val={formik.values.title} />
                    <button
                        className='btn btn-success border-0 rounded-3 my-5'
                        type='submit'>
                        {getCategoryId !== undefined ? "Edit" : "Add"} Category
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Addcat;