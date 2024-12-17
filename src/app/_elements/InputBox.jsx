import React from "react";

const InputBox = (props) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {props.title}
      </label>

      <input
        type={props.type}
        id={props.title}
        name={props.title}
        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
      />
    </div>
  );
};

export default InputBox;
