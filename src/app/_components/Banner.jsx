import Cover from "../_Images/beeac42e-4a81-42ea-9c6d-68bb422d1a83.png";
import Image from "next/image";
import { Button , ButtonSecondary } from "../_elements/Buttons";

const Banner = () => {
  return (
    <div>
      <section className="relative">
        <Image
          src={Cover}
          alt="Cover"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Connettiti alla velocità della luce
              <strong className="block font-extrabold text-secondary">
                {" "}
            Sempre connessi{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            La rete su cui puoi contare per il lavoro, lo studio e l'intrattenimento.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <ButtonSecondary name="Mobile" href="/mobile"/>
              <Button name="Internet" href="/internet"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
