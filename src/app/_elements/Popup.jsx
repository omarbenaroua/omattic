import { Button } from "./Buttons";
import Image from "next/image";
import Img from "../_Images/internet-background.jpg";

const Popup = (props) => {
  return (
    <div className=" absolute bg-primary bg-opacity-80 z-10  h-[3000px]">
      <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 p-40">
        <Image
          src={Img}
          alt="img"
          width={30000}
          height={30000}
          className="h-32 w-full object-cover md:h-full"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 bg-secondary">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Omattic telecomunicazioni, internet, assistenza.
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl font-black sm:text-5xl lg:text-6xl ">
              La ringraziamo per averci scelto.
            </span>

            <span className="mt-2 block text-2xl text-primary">
              Entro 42 ore riceverà un'email di conferma contenente i dettagli
              dell'abbonamento scelto e, in allegato, il contratto che dovrà
              firmare.
            </span>
          </h2>

          <div className="py-10">
            <Button name="Home" href="/" />
            <div className=" flex justify-center m-3 space-x-4">
              <Button name="Icloud" href="https://www.icloud.com/" target="_blank"/>
              <Button name="Gmail" href="https://mail.google.com/" target="_blank"/>
            </div>
          </div>
          <p className="mt-8 text-xs font-medium uppercase text-gray-300">
            Qualora il cliente non ricevesse l'email di conferma o non fosse
            contattato dal nostro servizio di assistenza, è invitato a
            contattare il numero: 0770 000000.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Popup;
