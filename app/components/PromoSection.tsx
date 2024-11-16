import React from "react";
import Product from "./Product";
import Link from "next/link";

export default function PromoSection() {
  return (
    <section
      id="ПРОМО"
      className="bg-beige-light ~md/xl:~px-10/40 py-20 flex flex-col items-center gap-14"
    >
      <h2 className="text-brown text-5xl font-light text-center">
        ПРОМО ПАКЕТИ
      </h2>
      <div className="grid grid-cols-auto-fill-400 gap-10 w-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <Product
            key={index}
            lowestPriceText="Най-ниска цена за последните 30 дни: 104,00 лв."
            discount={20}
            originalPrice={104}
          />
        ))}
      </div>

      <Link
        href="#"
        className="text-brown underline text-xl hover:text-beige transition-all duration-300"
      >
        РАЗГЛЕДАЙ ОЩЕ
      </Link>
    </section>
  );
}
