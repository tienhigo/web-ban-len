import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getColors, deleteAColor, resetState } from "../features/color/colorSlice";
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

const Colorlist = () => {
  const [open, setOpen] = useState(false);
  const [colorId, setColorId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setColorId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getColors());
    
  }, []);
  const colorState = useSelector((state) => state.color.colors);
  const data1 = [];
  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i + 1,
      title: colorState[i].title,

      action: (
        <>
          <Link 
          to={`/admin/color/${colorState[i]._id}`}
          className="fs-3 text-danger"><BiEdit /></Link>
          <button 
          className="ms-3 fs-3 text-danger bg-transparent border-0" 
          onClick={() => showModal(colorState[i]._id)}
          ><AiFillDelete />
          </button>
        </>
      ),

    });
  }
  const deleteColor = (e) => {
    dispatch(deleteAColor(e));
    setOpen(false);
   
    setTimeout(()=>{
      dispatch(getColors());
    },100);

  };
  return (
    <div className="mt-4 ">
      <h3 className="mb-4 title">Color list</h3>
      <div>
        <Table

          columns={columns}
          dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => { deleteColor(colorId) }}
        title="ARE U SURE ABOUT THAT?" />
    </div>
  )
}
export default Colorlist