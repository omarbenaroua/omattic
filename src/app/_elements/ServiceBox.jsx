import React from 'react'
import Image from 'next/image'


const ServiceBox = (props) => {
  return (
    <div>
        <a
        className="block bg-gray-900 rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-secondary hover:shadow-secondary"
        href="/"
      >
        <Image src={props.img} alt='Service Box' width={300} height={300} className="size-20"/>
        <h2 className="mt-4 text-xl font-bold text-white">{props.title}</h2>
        <p className="mt-1 text-sm text-gray-300">{props.text}</p>
      </a>
    </div>
  )
}

export default ServiceBox