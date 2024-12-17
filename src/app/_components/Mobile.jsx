import Image from "next/image";
import Img from "../_Images/istockphoto-1365672500-612x612.jpg";
import ProductBox from "../_elements/ProductBox";
import Data from "../_data/MobileData";
import {Button , ButtonSecondary} from "../_elements/Buttons";

const Mobile = () => {
  return (
    <div>
      <section className="bg-primary">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl text-center py-20">
            Offerte <span className="text-secondary">Mobile</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-secondary p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Abbonamenti
                  </h2>
                  <p className="mt-4 text-white">
                    Scopri le nostre offerte esclusive per abbonamenti Internet
                    ultra-veloci e pacchetti di chiamate senza limiti, pensate
                    per tenerti sempre connesso al miglior prezzo. Scegli la
                    soluzione ideale per le tue esigenze e inizia a navigare
                    senza pensieri!
                  </p>
                </header>
                <div className="my-2">
                <Button href="/mobile" name="Tutte le offerte voce e internet"/>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                {Data.map((info) => {
                  return (
                    <>
                      <ProductBox
                        price={info.price}
                        text={info.text}
                        img={info.img}
                        href="/mobileCheckout"
                      />
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image src={Img} alt="mobile" width={2000} height={2000} />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                La nostra rete mobile ?
              </h2>

              <p className="mt-4 text-gray-500">
                La nostra rete mobile è la più avanzata e affidabile del
                territorio, garantendo connessioni veloci e stabili ovunque tu
                sia. Con copertura su larga scala, puoi contare su una
                connessione sempre attiva, anche nelle aree più remote. Offriamo
                velocità di navigazione elevate, per una fruizione dei contenuti
                senza interruzioni. La sicurezza è una nostra priorità, con
                sistemi di protezione avanzati per i tuoi dati. Scegli la rete
                mobile che ti offre la massima affidabilità, supportata da
                un’assistenza clienti dedicata e pronta a rispondere a ogni tua
                esigenza.
              </p>
              <ButtonSecondary href="/info" name="Piu informazione"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
