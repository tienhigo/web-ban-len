import React from 'react'
import { Modal } from 'antd';
export const CustomModal = (props) => {
    const { open, hideModal, performAction, title } = props;
    return (
        <Modal
            title="Confirmation"
            open={open}
            onOk={performAction}
            onCancel={hideModal}
            okText="OK"
            cancelText="CANCEL"
        >
            <p>{title}</p>

        </Modal>
    )
}
export default CustomModal;
