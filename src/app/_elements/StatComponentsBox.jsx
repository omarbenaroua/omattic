import React from "react";

const StatComponentsBox = (props) => {
  return (
    <div className="flex flex-col rounded-lg border px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">
        {props.title}
      </dt>
      <dd className="text-4xl font-extrabold text-secondary md:text-5xl">
        {props.text}
      </dd>
    </div>
  );
};

export default StatComponentsBox;
