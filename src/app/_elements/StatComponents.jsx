import React from "react";
import StatComponentsBox from "./StatComponentsBox";

const StatComponents = () => {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
            Numeri che fanno la differenza
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Scopri perché sempre più famiglie scelgono i nostri servizi:
            velocità eccezionali, clienti soddisfatti e soluzioni personalizzate
            per ogni esigenza. I numeri parlano chiaro!
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatComponentsBox title="Velocità della connessione" text="1 Gbps" />
          <StatComponentsBox title="Copertura" text="95%" />
          <StatComponentsBox title="Tempi di attivazione" text="3 giorni" />
          <StatComponentsBox title="Piani disponibili" text="5 piani" />
        </dl>
      </div>
    </div>
  );
};

export default StatComponents;
