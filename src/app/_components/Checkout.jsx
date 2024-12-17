"use client"
import { useState } from "react";
import Logo from "../_Images/logo_small_icon_only_inverted.png";
import Cover from "../_Images/business-8256831.jpg";
import Image from "next/image";
import InputBox from "../_elements/InputBox";
import CheckoutBox from "../_elements/CheckoutBox";
import Popup from "../_elements/Popup";

const Checkout = (props) => {
  const [popups , setpopups] = useState(false);
  const popupOpen = (() => {setpopups(true)})
  return (
    <div>
      {popups ? <Popup/> : false }
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <div className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              src={Cover}
              alt="cover"
              width={10000}
              height={10000}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="flex">
                <a className="justify-center items-center flex" href="/">
                  <Image src={Logo} alt="" width={50} height={45} />
                </a>
                <h1 className="p-2 items-center flex text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Abbonamento internet
                </h1>
              </div>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>

              <div className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <InputBox title="Nome" type="text" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <InputBox title="Cognome" type="text" />
                </div>
                <div className="col-span-6">
                  <InputBox title="Email" type="email" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <InputBox title="Località" type="text" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <InputBox title="Via / Nome di casa" type="text" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <InputBox title="Numero di casa" type="text" />
                </div>
                <div className="col-span-6">
                  <InputBox title="Telefono" type="text" />
                </div>
                <div className="col-span-6">
                  <InputBox title="fisso" type="text" />
                </div>
                <div className="col-span-6">
                    <CheckoutBox data={props.data}/>
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-secondary bg-secondary px-12 py-3 text-sm font-medium text-white" onClick={popupOpen}>
                    Invia la richiesta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Checkout;
