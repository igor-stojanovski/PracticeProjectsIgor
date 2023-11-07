import {
  LegacyRef,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  buttonCaption: string;
};

const Modal = forwardRef(function Modal(
  { children, buttonCaption }: Props,
  ref
) {
  const dialog = useRef<LegacyRef<HTMLDialogElement> | undefined>();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md">
      {children}
      <form action="" method="dialog" className="mt-4 text-right">
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
