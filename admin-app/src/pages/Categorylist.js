import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories, deleteACategory, resetState } from "../features/pcategory/pcategorySlice";
import CustomModal from "../components/CustomModal";


const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];
const Categorylist = () => {
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setCategoryId(e);
  }
  const hideModal = () => {
    setOpen(false);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, []);
  const pcategoryState = useSelector((state) => state.pcategory.pcategories);
  const data1 = [];
  for (let i = 0; i < pcategoryState.length; i++) {
    data1.push({
      key: i + 1,
      title: pcategoryState[i].title,

      action: (
        <>
          <Link
            to={`/admin/category/${pcategoryState[i]._id}`}
            className="fs-3 text-danger"><BiEdit /></Link>
          <button className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(pcategoryState[i]._id)}
          ><AiFillDelete />
          </button>
        </>
      ),

    });
  }
  const deleteCategory = (e) => {
    dispatch(deleteACategory(e));
    setOpen(false);
   
    setTimeout(()=>{
      dispatch(getCategories());
    },100);

  };
  return (
    <div className="mt-4">
      <h3 className="mb-4 title">Category list</h3>
      <div>
        <Table
          columns={columns}
          dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => { deleteCategory(categoryId) }}
        title="ARE U SURE ABOUT THAT?" />
    </div>
  )
}
export default Categorylist