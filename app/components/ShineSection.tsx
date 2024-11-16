import React from "react";
import Product from "./Product";

export default function ShineSection() {
  return (
    <section
      id="БЛЯСЪК"
      className="bg-white ~md/xl:~px-10/40 py-20 flex flex-col items-center justify-center gap-14"
    >
      <div className="text-brown text-center">
        <h2 className="text-5xl font-light">БЛЯСЪК</h2>
        <h3 className="text-base">
          Натурални продукти за елегантен блясък и грижа за кожата
        </h3>
      </div>

      <div className="grid grid-cols-auto-fill-400 gap-10 w-full justify-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <Product
            key={index}
            subTitle="Hair Growth Serum Spay"
            ratings={1332}
            ratingStars={5}
          />
        ))}
      </div>
    </section>
  );
}
