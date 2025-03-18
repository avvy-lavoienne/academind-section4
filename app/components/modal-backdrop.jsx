// app/components/ModalBackdrop.jsx
"use client";

import { useRouter } from "next/navigation";

const ModalBackdrop = ({ onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose} />
  );
};

export default ModalBackdrop;
