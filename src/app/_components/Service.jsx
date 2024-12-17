import ServiceBox from "../_elements/ServiceBox";
import ServiceData from "../_data/ServiceData"
import { ButtonSecondary } from "../_elements/Buttons"

const Service = () => {
  return (
    <div>
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
            Connettività Avanzata per la Casa e il Mobile
            </h2>
            <p className="mt-4 text-gray-300">
            Sfrutta una rete in fibra di ultima generazione per velocità, sicurezza e supporto affidabile 24/7.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ServiceData.map((info) => {
              console.log(info.title)
              return(
                <>
                <ServiceBox title={info.title} text={info.text} img={info.img}/>
                </>
              )
            })}
          </div>
          <div className="mt-12 text-center">
          <ButtonSecondary name="Chi siamo" href="/info"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
