import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../components/CustomModal";
import { Link } from "react-router-dom";
import { deleteAEnquiry, getEnquiries, resetState, updateAEnquiry } from "../features/enquiry/enquirySlice";

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },

  {
    title: 'Mobile',
    dataIndex: 'mobile',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },

];

const Enquiries = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [enqId, setEnqId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setEnqId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(resetState());
    dispatch(getEnquiries());
  }, []);
  const enquiryState = useSelector((state) => state.enquiry.enquiries);
  const data1 = [];
  for (let i = 0; i < enquiryState.length; i++) {
    data1.push({
      key: i + 1,
      name: enquiryState[i].name,
      email: enquiryState[i].email,
      mobile: enquiryState[i].mobile,
      status: (
        <>
          <select
            name=""
            defaultValue={enquiryState[i].status ? enquiryState[i].status : "Submitted"}
            className='form-control form-select'
            id=""
            onChange={(e) => setEnquiryStatus(e.target.value, enquiryState[i]._id)}
          >
            <option value="Submitted" selected>
              Submitted
            </option>
            <option value="Contacted" selected>
              Contacted
            </option>
            <option value="In Progress" selected>
              In Progress
            </option>
            <option value="Resolved" selected>
              Resolved
            </option>
          </select>
        </>
      ),
      action: (
        <>
          <Link to={`/admin/enquiry/${enquiryState[i]._id}`}
            className="fs-3 text-danger"><AiOutlineEye /></Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(enquiryState[i]._id)}
          ><AiFillDelete />
          </button>
        </>
      ),

    });
  }

  const setEnquiryStatus = (e, i) => {
    console.log(e, i);
    const data = { id: i, enqData: e };
    dispatch(updateAEnquiry(data));

  }
  const deleteEnq = (e) => {
    dispatch(deleteAEnquiry(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getEnquiries());
    }, 100);


  };
  return (
    <div className="mt-4">
      <h3 className="mb-4 title">Enquiries </h3>
      <div>
        <Table

          columns={columns}
          dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => { deleteEnq(enqId) }}
        title="ARE U SURE ABOUT THAT?" />

    </div>
  )
}
export default Enquiries