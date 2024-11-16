import React from "react";
import Product from "./Product";

export default function HairSection() {
  return (
    <section
      id="КОСА"
      className="bg-white ~md/xl:~px-10/40 py-20 flex flex-col items-center gap-14"
    >
      <div className="text-brown text-center">
        <h2 className="text-5xl font-light">КОСА</h2>
        <h3 className="text-base">
          Натурални продукти за силна, гъста и бляскава коса
        </h3>
      </div>

      <div className="grid grid-cols-auto-fill-2 gap-10 w-full justify-center">
        {Array.from({ length: 2 }).map((_, index) => (
          <Product
            key={index}
            subTitle="Hair Growth Serum Spay"
            ratings={1332}
            ratingStars={5}
            badge={true}
            improvedFormula={index === 0 ? true : false}
          />
        ))}
      </div>
    </section>
  );
}
