import Mobile from "@/app/_components/Mobile"
import ProductBanner from "@/app/_elements/ProductBanner"
import Cover from "../../_Images/mobile-background.jpg";

const page = () => {
  return (
    <>
    <ProductBanner img={Cover} tittle="Scopri i Piani Perfetti per Te." text="Offerte su misura per te, con il massimo della convenienza." nameButton="Internet" hrefButton="/internet"/>
    <Mobile/>
    </>
  )
}

export default page