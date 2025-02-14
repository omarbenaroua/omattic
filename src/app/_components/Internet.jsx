"use client";
import Data from "../_data/InternetData";
import ProductBox from "../_elements/ProductBox";
import { Button } from "../_elements/Buttons";
import Image from "next/image";
import img from "../_Images/beeac42e-4a81-42ea-9c6d-68bb422d1a83.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Internet = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xTransformimage = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["-200%", "0%"]
  );

  return (
    <div>
      <section className="bg-primary">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl text-center py-20">
            Offerte <span className="text-secondary">Internet</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-4 lg:py-8">
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8" ref={ref}>
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <motion.div
              className="relative z-10 lg:py-16"
              style={{
                x: xTransformimage,
              }}
            >
              <div className="relative h-64 sm:h-80 lg:h-full">
                <Image
                  src={img}
                  alt="internet"
                  width={2000}
                  height={2000}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <div className="relative flex items-center bg-secondary">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-secondary"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl text-primary">
                  La nostra rete Internet a casa
                </h2>

                <p className="my-5 text-gray-100">
                  La nostra rete Internet a casa è progettata per offrirti
                  velocità straordinarie e una connessione stabile in ogni
                  momento. Grazie alla tecnologia fibra ottica di ultima
                  generazione, garantiamo performance elevate per streaming in
                  4K, gaming online e smart working senza interruzioni. La
                  copertura estesa e l'affidabilità della nostra rete ti
                  permettono di connetterti da ogni angolo della tua casa,
                  mentre i sistemi di sicurezza avanzati proteggono la tua
                  navigazione e i tuoi dati. Con un'assistenza clienti sempre
                  disponibile, ti offriamo la tranquillità di una connessione su
                  cui puoi davvero contare.
                </p>

                <Button href="/offers" name="Tutte le offerte" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internet;
