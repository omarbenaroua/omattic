import Image from "next/image";
import { ButtonSecondary } from "../_elements/Buttons";

const ProductBanner = (props) => {
  return (
    <div>
      <section className="relative">
        <Image
          src={props.img}
          alt="Cover"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center">
          <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Offerte Mobile
              <strong className="block font-extrabold text-secondary">
                {" "}
                {props.tittle}{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              {props.text}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <ButtonSecondary name={props.nameButton} href={props.hrefButton} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductBanner;
