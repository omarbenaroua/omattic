import Image from "next/image";
import Logo from "../_Images/logo_large.png";
import Facebook from "../_Images/facebook.png";
import Instagram from "../_Images/instagram.png";
import X from "../_Images/twitter.png";
import Whatsapp from "../_Images/whatsapp.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <Image src={Logo} alt="Logo" width={300} height={300} />
              <p className="mt-6 max-w-md text-center leading-relaxed text-gray-300 sm:max-w-xs sm:text-left">
                La rete su cui puoi contare per il lavoro, lo studio e
                l'intrattenimento.
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <Image src={Facebook} alt="Facebook" width={20} height={20} />
                </li>

                <li>
                  <Image
                    src={Instagram}
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </li>

                <li>
                  <Image src={X} alt="X" width={20} height={20} />
                </li>

                <li>
                  <Image src={Whatsapp} alt="Whatsapp" width={20} height={20} />
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-secondary">Contatti</p>
                <ul className="mt-8 space-y-4 text-sm text-gray-300">
                  <p>Via venezia 1</p>
                  <p>6500 Bellinzona</p>
                  <p>091 000 00 00</p>
                  <p>092 000 00 00</p>
                  <p>Omattic@omattic.com</p>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-secondary">Orari</p>
                <ul className="mt-8 space-y-4 text-sm text-gray-300">
                  <p>Lunedì - Venerdi</p>
                  <p>9:00-12:00</p>
                  <p>14:00-18:00</p>
                  <p>Sabato</p>
                  <p>8:00-14:00</p>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-secondary">Prodotti</p>
                <ul className="mt-8 space-y-4 text-sm text-gray-300">
                  <p>Mobile</p>
                  <p>Internet</p>
                  <p>Telefonia fissa</p>
                  <p>TV</p>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex justify-center">
              <p className="mt-4 text-sm text-secondary sm:order-first sm:mt-0">
                &copy; 2024 Omar ben aroua
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
