import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface ModalProp {
    isShow: boolean;
    handleHideModal: any;
    title: string;
}
const ModalComp: React.FC<ModalProp> = ({ isShow, handleHideModal, title }) => {
    return (
        <>
            <Modal
                title="Basic Modal"
                open={isShow}
                onOk={handleHideModal}
                onCancel={handleHideModal}
            >
                <p>{title}</p>
            </Modal>
        </>
    );
};

export default ModalComp;
