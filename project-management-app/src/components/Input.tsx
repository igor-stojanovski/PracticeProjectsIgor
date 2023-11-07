import { ForwardedRef, LegacyRef, forwardRef } from "react";

type Props = {
  isTextArea: boolean;
  labelText: string;
};

type InputElement = HTMLInputElement | HTMLTextAreaElement;

const Input = forwardRef(function Input(
  { isTextArea, labelText, ...props }: Props,
  ref: ForwardedRef<InputElement> | undefined
) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor="" className="text-sm font-bold uppercase text-stone-500">
        {labelText}
      </label>
      {isTextArea ? (
        <textarea
          ref={ref as LegacyRef<HTMLTextAreaElement>}
          className={classes}
          {...props}
        />
      ) : (
        <input
          ref={ref as LegacyRef<HTMLInputElement>}
          className={classes}
          {...props}
        />
      )}
    </p>
  );
});

export default Input;
