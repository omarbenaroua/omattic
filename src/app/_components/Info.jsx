import Image from "next/image";
import Cover from "../_Images/beeac42e-4a81-42ea-9c6d-68bb422d1a83.png";
import Testimonial from "../_elements/Testimonial";
import { Button } from "../_elements/Buttons";


const Info = () => {
  return (
    <div>
      <section className="overflow-hidden bg-secondary sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Omattic
            </h2>
            <p className="hidden md:mt-4 md:block">
              L’offerta multimediale dei servizi di telecomunicazione
            
            </p>

            <div className="">
              <Button name="Mobile" href="/mobile"/>
              <Button name="Internet" href="/internet"/>
            </div>
          </div>
        </div>
        <Image src={Cover} alt="Cover" width={3000} height={3000} className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"/>
      </section>

      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>

          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
            sequi.
          </p>
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded"
          alt=""
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
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                Omattic è l’offerta multimediale dei servizi di telecomunicazione
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                Omattic è l’offerta multimediale dei servizi di telecomunicazione: Internet ultraveloce, Telefonia fissa e Mobile.
                  Grazie a un’esperienza consolidata nel settore e a una visione
                  orientata all’innovazione, Omattic si impegna a offrire
                  tecnologie avanzate e servizi su misura per soddisfare le
                  esigenze di ogni cliente. Con l’obiettivo di promuovere
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
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                alt=""
                src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <Testimonial/>
      
    </div>
  );
};

export default Info;
