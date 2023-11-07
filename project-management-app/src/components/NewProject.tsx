import { Ref, useRef } from "react";
import { Project } from "../App";
import Input from "./Input";
import Modal from "./Modal";

type Props = {
  onAdd: (projectData: Project) => void;
  onCancel: () => void;
};

export default function NewProject({ onAdd, onCancel }: Props) {
  const titleRef = useRef<
    Ref<HTMLInputElement | HTMLTextAreaElement> | undefined
  >();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      desc: enteredDescription,
      dueDate: enteredDueDate,
      id: Math.random() * 1000,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p>Please make sure you provide a valid value for every field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            type="text"
            ref={titleRef}
            labelText="Title"
            isTextArea={false}
          />
          <Input
            ref={descriptionRef}
            labelText="Description"
            isTextArea={true}
          />
          <Input
            type="date"
            ref={dueDateRef}
            labelText="Due Date"
            isTextArea={false}
          />
        </div>
      </div>
    </>
  );
}
