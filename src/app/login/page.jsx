import Image from "next/image";
import Cover from "../_Images/internet-background.jpg";
import Logo from "../_Images/logo_small_icon_only_inverted.png";
import InputBox from "../_elements/InputBox";
import { ButtonSecondary } from "../_elements/Buttons";

const Login = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <Image
              src={Cover}
              alt="Cover"
              width={3000}
              height={3000}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div className="hidden lg:relative lg:block lg:p-12">
              <Image src={Logo} alt="Cover" width={100} height={100} />
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Benvenuti su Omattic
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                La rete su cui puoi contare per il lavoro, lo studio e
                l'intrattenimento.
              </p>
            </div>
          </section>

          <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <Image src={Logo} alt="Cover" width={100} height={100} />
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Benvenuti su Omattic
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  La rete su cui puoi contare per il lavoro, lo studio e
                  l'intrattenimento.
                </p>
              </div>

              <form className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <InputBox title="Nome/Email" type="email" />
                </div>

                <div className="col-span-6 ">
                  <InputBox title="Password" type="password" />
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <ButtonSecondary name="Accedi" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
