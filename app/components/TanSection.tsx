import React from "react";
import Product from "./Product";

export default function TanSection() {
  return (
    <section
      id="ТЕН"
      className="bg-beige-light ~md/xl:~px-10/40 py-20 flex flex-col items-center gap-14"
    >
      <div className="text-brown text-center">
        <h2 className="text-5xl font-light">ТЕН</h2>
        <h3 className="text-base">
          Натурални, био масла за супер тен и сияйна кожа
        </h3>
      </div>

      <div className="grid grid-cols-auto-fill-400 gap-10 w-full">
        {Array.from({ length: 9 }).map((_, index) => (
          <Product
            key={index}
            subTitle="Hair Growth Serum Spay"
            ratings={1332}
            ratingStars={5}
            badge={index === 1 ? true : false}
            volume1={index !== 0 && index !== 8 ? 110 : undefined}
            volume2={index !== 0 && index !== 8 ? 200 : undefined}
            price1={index !== 0 && index !== 8 ? 45 : undefined}
            price2={index !== 0 && index !== 8 ? 63 : undefined}
          />
        ))}
      </div>
    </section>
  );
}
