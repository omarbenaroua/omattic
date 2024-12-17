import React from "react";
import Image from "next/image";
import img from "../_Images/start.png";

const TestimonialBox = (props) => {
  return (
    <div>
      <blockquote className="bg-secondary flex h-full flex-col justify-between p-6 shadow-sm sm:p-8">
        <div>
          <div className="flex gap-0.5 text-green-500">
            {Array(props.start)
              .fill()
              .map((_, index) => (
                <Image key={index} src={img} alt="" width={20} height={20} />
              ))}
          </div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-primary sm:text-3xl">
              {props.title}
            </p>

            <p className="mt-4 leading-relaxed text-gray-300">{props.text}</p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; {props.name}
        </footer>
      </blockquote>
    </div>
  );
};

export default TestimonialBox;
