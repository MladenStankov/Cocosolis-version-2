import React from "react";

export default function EmailCTA() {
  return (
    <section
      id="ЕМАЙЛ"
      className="flex flex-col bg-brown text-white py-10 px-4 md:px-16 lg:px-48"
    >
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6">
        Нека бъдем приятели! Абонирайте се, за да бъдете сред първите, които ще
        научат за нашите нови продукти и промоции:
      </h2>

      <input
        type="email"
        placeholder="твоят имейл адрес"
        className="w-full p-3 md:py-4 rounded-lg text-black mb-4"
      />

      <p className="text-sm md:text-base italic mb-4">
        Моля, поставете отметка в квадратчето по-долу, за да можете да се
        присъедините.
      </p>

      <div className="flex flex-col md:flex-row gap-2 text-sm md:text-base mb-4">
        <input type="checkbox" className="h-5 w-5 self-start md:self-center" />
        <p>
          Съгласен/на съм предоставеният от мен имейл да бъде използван, за да
          получавам известия за новости, подаръци и бъдещи промоции, свързан с
          продуктите COCOSOLIS, съгласно
          <span className="underline">Общите условия за ползване на сайта</span>
          и <span className="underline">Политика за личните данни.*</span>
        </p>
      </div>

      <button className="w-full md:w-auto text-white text-lg md:text-xl bg-orange-400 py-3 px-6 font-semibold rounded-lg hover:bg-orange-500">
        ВЛЕЗ В КЛУБА
      </button>
    </section>
  );
}
