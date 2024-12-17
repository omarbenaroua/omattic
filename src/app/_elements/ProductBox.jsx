import Image from 'next/image'

const ProductBox = (props) => {
  return (
    <div>
         <li>
                  <a href={props.href} className="bg-gray-900 group block p-5 md:p-10 shadow-xl transition hover:shadow-secondary hover:translate-y-[-20px] duration-700">
                    <Image src={props.img} alt="mobile box" width={2000} height={2000}/>
                    <div>
                      <h3 className="md:text-4xl font-bold text-secondary group-hover:underline group-hover:underline-offset-4">
                        {props.price}.- <span className='md:text-xl'>Al mese</span>
                      </h3>
                      <p className="text-sm text-gray-200">{props.text}</p>
                    </div>
                  </a>
                </li>
    </div>
  )
}

export default ProductBox