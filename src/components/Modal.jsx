import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, isOpen }) {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {isOpen ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
