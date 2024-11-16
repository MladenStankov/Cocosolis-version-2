import React from "react";
import Product from "./Product";

export default function SkinSection() {
  return (
    <section
      id="КОЖА"
      className="bg-white ~md/xl:~px-10/40 py-20 flex flex-col items-center justify-center gap-14"
    >
      <div className="text-brown text-center">
        <h2 className="text-5xl font-light">КОЖА</h2>
        <h3 className="text-base">
          Серията SKIN за перфектна кожа, без несъвършенства.
        </h3>
      </div>

      <div className="grid grid-cols-auto-fill-400 gap-10 w-full justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <Product
            key={index}
            subTitle="Hair Growth Serum Spay"
            ratings={1332}
            ratingStars={5}
            badge={index === 0 ? true : false}
            volume1={index === 0 ? 110 : undefined}
            volume2={index === 0 ? 200 : undefined}
            price1={index === 0 ? 45 : undefined}
            price2={index === 0 ? 63 : undefined}
          />
        ))}
      </div>
    </section>
  );
}
