import Data from "../_data/InternetData";
import ProductBox from "../_elements/ProductBox";
import { Button } from "../_elements/Buttons";
import Image from "next/image";
import img from "../_Images/beeac42e-4a81-42ea-9c6d-68bb422d1a83.png";

const Internet = () => {
  return (
    <div>
      <section className="bg-primary">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl text-center py-20">
            Offerte <span className="text-secondary">Internet</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-4 lg:py-8">
              <ul className="grid grid-cols-3 gap-4">
                {Data.map((info) => {
                  return (
                    <>
                      <ProductBox
                        price={info.price}
                        text={info.text}
                        img={info.img}
                        href="/internetCheckout"
                      />
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <Image
                  src={img}
                  alt="internet"
                  width={2000}
                  height={2000}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-secondary">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-secondary"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl text-primary">
                  La nostra rete mobile
                </h2>

                <p className="mt-4 text-gray-100">
                  La nostra rete mobile è la più avanzata e affidabile del
                  territorio, offrendo connessioni veloci e stabili ovunque ti
                  trovi. Con una copertura capillare, garantiamo che tu possa
                  navigare senza interruzioni anche nelle aree più remote. Le
                  nostre velocità di navigazione elevate ti permettono di fruire
                  di contenuti in streaming e di lavorare in modo fluido, mentre
                  i sistemi di protezione avanzati assicurano la massima
                  sicurezza per i tuoi dati. Scegli una rete mobile che offre
                  non solo affidabilità, ma anche un’assistenza clienti
                  dedicata, pronta a risolvere ogni tua esigenza in tempo reale.
                </p>

                <Button href="/internet" name="Tutte le offerte internet" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internet;
