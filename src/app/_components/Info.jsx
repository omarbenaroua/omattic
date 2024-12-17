import Image from "next/image";
import Cover from "../_Images/beeac42e-4a81-42ea-9c6d-68bb422d1a83.png";
import Testimonial from "../_elements/Testimonial";
import { Button } from "../_elements/Buttons";
import Gif from "../_Images/Cloud Data Analysis.gif"
import Img from "../_Images/pretty-woman-posing-fair.jpg"
import Img2 from "../_Images/beautiful-optical-fiber-detail.jpg"


const Info = () => {
  return (
    <div>
      <section className="overflow-hidden bg-secondary sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Omattic
            </h2>
            <p className=" md:mt-4 md:block p-5">La tua connessione veloce, stabile e senza limiti inizia da qui.</p>
            <div className=" flex justify-center space-x-3">
              <Button name="Mobile" href="/mobile" />
              <Button name="Internet" href="/internet" />
            </div>
          </div>
        </div>
        <Image
          src={Cover}
          alt="Cover"
          width={3000}
          height={3000}
          className="sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-secondary sm:text-3xl">
                  Chi Siamo ?
                </h2>

                <p className="mt-4 text-gray-500">
                  Connettiamo il futuro, oggi: offriamo soluzioni internet fibra
                  ad alta velocità e abbonamenti mobile affidabili per garantire
                  a tutti una connessione stabile, sicura e senza limiti,
                  ovunque e in qualsiasi momento.
                </p>
              </div>
            </div>

            <div>
            <Image
          src={Gif}
          alt="Gif"
          width={3000}
          height={3000}
          className=" rounded"
        />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-secondary p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-start">
                <h2 className="text-2xl font-bold text-primary md:text-3xl">
                  Omattic è l’offerta multimediale dei servizi di
                  telecomunicazione
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  Omattic è l’offerta multimediale dei servizi di
                  telecomunicazione: Internet ultraveloce, Telefonia fissa e
                  Mobile. Grazie a un’esperienza consolidata nel settore e a una
                  visione orientata all’innovazione, Omattic si impegna a
                  offrire tecnologie avanzate e servizi su misura per soddisfare
                  le esigenze di ogni cliente. Con l’obiettivo di promuovere
                  l’innovazione tecnologica sul territorio, Omattic continua a
                  investire nella realizzazione di una rete FTTH (Fiber to the
                  Home), garantendo connessioni ad altissima velocità,
                  affidabilità e prestazioni di livello superiore. La rete in
                  fibra ottica è progettata per supportare anche le esigenze
                  future, come la domotica, il lavoro da remoto e
                  l’intrattenimento in streaming in 4K e 8K. I servizi Omattic
                  sono disponibili per tutti i residenti delle zone coperte
                  dalla rete, a condizione che l’abitazione sia collegata alla
                  fibra ottica. L’assistenza clienti, attiva 24/7, garantisce
                  supporto rapido e professionale, mentre una serie di pacchetti
                  personalizzabili consente di scegliere l’offerta più adatta.
                  Il servizio Mobile è invece fruibile ovunque grazie alla
                  copertura nazionale e a tariffe competitive, inclusi piani con
                  roaming internazionale per chi viaggia frequentemente.
                  Omattic: la tecnologia che semplifica la tua vita, un passo
                  verso il futuro.
                </p>

                <div className="mt-4 md:mt-8">
                Tutte le offerte voce e internet
                <Button name="Tutte le offerte voce e internet" href="/offers" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                          <Image
          src={Img}
          alt="Img"
          width={3000}
          height={3000}
          className=" h-40 w-full object-cover sm:h-56 md:h-full"
        />

<Image
          src={Img2}
          alt="Img"
          width={3000}
          height={3000}
          className=" h-40 w-full object-cover sm:h-56 md:h-full"
        />
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
    </div>
  );
};

export default Info;
