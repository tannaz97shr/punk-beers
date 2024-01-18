"use client";

import { useRouter } from "next/navigation";
import Backdrop from "../Backdrop";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const router = useRouter();
  return (
    <>
      <Backdrop onClick={() => router.back()} />
      <div className="p-4 bg-bg-secondary text-dark m-auto fixed left-0 right-0 z-40 w-[80%] md:w-2/3">
        {children}
      </div>
    </>
  );
};

export default Modal;
