import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoupon, deleteACoupon, resetState } from "../features/coupon/couponSlice";
import { Link } from "react-router-dom";
import CustomModal from "../components/CustomModal";

const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        soter: (a, b) => a.name.length - b.name.length,

    },
    {
        title: 'Expiry',
        dataIndex: 'expiry',
        
      },
      {
        title: 'Discount',
        dataIndex: 'discount',
       
      },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];


const Couponlist = () => {
    const [open, setOpen] = useState(false);
  const [couponId, setCouponId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setCouponId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState());
        dispatch(getAllCoupon());
    }, []);
    const couponState = useSelector((state) => state.coupon.coupons);
    const data1 = [];
    for (let i = 0; i < couponState.length; i++) {
        data1.push({
            key: i + 1,
            name: couponState[i].name,
            
            expiry:new Date(couponState[i].expiry).toLocaleString(),
            discount:couponState[i].discount,
            

            action: (
                <>
                    <Link 
                    to={`/admin/coupon/${couponState[i]._id}`}
                    className="fs-3 text-danger"><BiEdit /></Link>
                    <button 
                    className="ms-3 fs-3 text-danger bg-transparent border-0" 
                    onClick={() => showModal(couponState[i]._id)}><AiFillDelete />
                    </button>
                </>
            ),

        });
    }
    const deleteCoupon = (e) => {
    dispatch(deleteACoupon(e));
    setOpen(false);
   
    setTimeout(()=>{
      dispatch(getAllCoupon());
    },100);

  };
    return (
        <div className="mt-4">
            <h3 className="mb-4 title">COUPON</h3>
            <div>
                <Table

                    columns={columns}
                    dataSource={data1} />
            </div>
            <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => { deleteCoupon(couponId) }}
        title="ARE U SURE ABOUT THAT?" />
        </div>
    )
}
export default Couponlist