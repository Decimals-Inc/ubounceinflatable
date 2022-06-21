import React from 'react'

const InflatableComponent = ({image, name, price}) => {
  return (
      <section className="flex-shrink-0 w-80 lg:w-96 cursor-pointer">
            <img src={image} alt="Cards" className="w-full h-72 mb-5" />
            <h4 className="py-2 text-2xl font-light">{name}</h4>
            <p className="text-lg font-light">{`$ ${price} per day`}</p>
      </section>
  )
}

export default InflatableComponent