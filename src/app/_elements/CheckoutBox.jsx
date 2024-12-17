"use client";
import { useState } from "react";
import Image from "next/image";


const CheckoutBox = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <section>
        <div className="text-primary">
          <h3 className="text-3xl text-secondary p-4">
            Seleziona un piano Internet
          </h3>

          <div className="space-y-4">
            {props.data.map((info) => (
              <div key={info.id}>
                <label
                  htmlFor={`internetOption-${info.id}`}
                  className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                >
                  <div>
                    <p>{info.price} €/mese</p>
                    <p className="mt-1 text-gray-500">{info.text}</p>
                  </div>

                  <div className="inline-flex text-center text-s text-primary p">
                    <Image
                      src={info.img.src}
                      alt={`Icona del piano ${info.id}`}
                      width={50}
                      height={100}
                    />
                  </div>

                  <input
                    type="radio"
                    name="internetOptions"
                    value={info.id}
                    id={`internetOption-${info.id}`}
                    className="size-5 border-gray-300 text-secondary"
                    checked={selectedOption === String(info.id)}
                    onChange={handleChange}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutBox;
