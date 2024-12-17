import "./globals.css";
import Banner from "./_components/Banner";
import Sevice from "./_components/Service"
import Mobile from "./_components/Mobile";
import Internet from "./_components/Internet";
import StatComponents from "./_elements/StatComponents";
import Testimonial from "./_elements/Testimonial";

export default function Home() {
  return (
    <>
      <Banner/>
      <Sevice/>
      <StatComponents/>
      <Mobile/>
      <Internet/>
      <Testimonial/>
    </>
  );
}
