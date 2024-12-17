import Internet from '@/app/_components/Internet'
import ProductBanner from "@/app/_elements/ProductBanner"
import Cover from "../../_Images/internet-background.jpg";
import Testimonial from "@/app/_elements/Testimonial";

const page = () => {
  return (
    <div>
        <ProductBanner img={Cover} tittle="La Rete su Misura." text="Soluzioni personalizzate per navigare al meglio, ovunque tu sia." nameButton="Mobile" hrefButton="/mobile"/>
        <Internet/>
        <Testimonial/>
    </div>
  )
}

export default page