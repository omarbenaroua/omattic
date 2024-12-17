import React from "react";
import TestimonialBox from "./TestimonialBox";

const Testimonial = () => {
  return (
    <div>
      <section className="bg-primary">
        <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">
                Cosa dicono di noi ?
              </h2>

              <p className="mt-6 max-w-lg leading-relaxed">
                Leggi cosa pensano i nostri clienti! Velocità, affidabilità e
                assistenza sono i nostri punti di forza, confermati dalle loro
                esperienze. Siamo qui per offrirti un servizio eccellente, ogni
                giorno.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <TestimonialBox
              start={5}
              title="Recensione sulla qualità del servizio"
              text="La connessione è incredibilmente veloce e stabile! Dopo anni di problemi con altri provider, finalmente ho trovato un servizio affidabile. Consigliatissimo!"
              name="Luca R."
            />
            <TestimonialBox
              start={5}
              title="Recensione sull’assistenza clienti"
              text="L’assistenza clienti è fantastica! Ho avuto un problema con il router e lo hanno risolto in meno di un’ora. Personale cortese e super professionale."
              name="Giulia M."
            />
            <TestimonialBox
              start={5}
              title="Recensione sul rapporto qualità/prezzo"
              text="Servizio eccellente e a un prezzo competitivo. È bello sapere che si può avere una connessione di qualità senza spendere una fortuna. Promozione perfetta per la mia famiglia!"
              name="Marco T."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
