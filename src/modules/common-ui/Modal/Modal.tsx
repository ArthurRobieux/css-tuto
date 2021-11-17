import { ReactNode } from "react";
import ReactModal from "react-modal";

export type ModalProps = {
  children: ReactNode;
  modalIsOpen: boolean;
  close: () => void;
  padding?: number;
};

export const Modal = ({
  modalIsOpen,
  close,
  children,
  padding = 0,
}: ModalProps) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: "visible",
      padding: `${padding}px`,
      color: "black",
      border: "none",
      borderRadius: "8px",
    },
    overlay: { zIndex: "10000000", backgroundColor: "rgba(0, 0, 0, 0.9)" },
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={close}
      style={customStyles}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};
