import { React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
    createColor,
    getAColor,
    updateAColor,
    resetState  } from '../features/color/colorSlice';


let schema = Yup.object().shape({
    title: Yup.string().required("Color name is required"),
})
const Addcolor = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getColorId = location.pathname.split('/')[3];
    const newColor = useSelector((state) => state.color);
    const { 
        isSuccess, 
        isError, 
        isLoading, 
        createdColor, 
        colorName, 
        updatedColor,
     } = newColor;

useEffect(()=>{
    if(getColorId !== undefined){
        dispatch(getAColor(getColorId));
    }
    else{
        dispatch(resetState());
    }
},[getColorId]);

    useEffect(() => {
        if (isSuccess && createdColor) {
            toast.success('Color Added Successfully!');
        }
        if(isSuccess && updatedColor){
            toast.success('Color Updated Successfully!');
            navigate("/admin/list-color");
        }
        if (isError) {
            toast.error('Something went wrong!');
        }

    }, [isSuccess, isError, isLoading]);

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            title: colorName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (getColorId !== undefined) {
                const data = { id: getColorId, colorData: values };
                dispatch(updateAColor(data));
                dispatch(resetState());

            }
            else {
                dispatch(createColor(values));
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
            {getColorId !== undefined ? "Edit" : "Add"} Color
            </h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="color"
                        label="Enter color"
                        onChg={formik.handleChange('title')}
                        onBlr={formik.handleBlur('title')}
                        val={formik.values.title}
                        id="color" />
                    <button
                        className='btn btn-success border-0 rounded-3 my-5'
                        type='submit'>
                        {getColorId !== undefined ? "Edit" : "Add"} Color
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Addcolor;