import React from "react";
import { FaLeaf, FaPaw, FaHeart } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <section
      id="ЗА НАС"
      className="flex flex-col lg:flex-row bg-[#F2D3C1] text-brown"
    >
      <div className="flex flex-col gap-6 lg:w-1/2 self-center px-5 lg:px-24 py-10 lg:py-20">
        <div className="flex flex-row gap-4 items-center">
          <div className="flex bg-[#DAA48A] rounded-full justify-center p-4 border-white border-2">
            <FaLeaf size={40} className="self-center" fill="white" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold">Натурални и Био</h2>
            <p className="text-sm lg:text-base">
              Продуктите на COCOSОLIS са винаги натурални и създадени само с
              най-висококачествени био, студено пресовани масла.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex bg-[#DAA48A] rounded-full justify-center p-4 border-white border-2">
            <FaHeart size={40} className="self-center" fill="white" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold">Създадени с любов</h2>
            <p className="text-sm lg:text-base">
              Създадени с любов и уважение към хората и природата. Нежни към
              кожата. Притежаващи аромат, в който ще се влюбите.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex bg-[#DAA48A] rounded-full justify-center p-4 border-white border-2">
            <FaPaw size={40} className="self-center" fill="white" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold">С отношение</h2>
            <p className="text-sm lg:text-base">
              Без наличие на парабени, оцветители, минерални и синтетични масла
              и разбира се, без тестване върху животни.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-[200px] lg:h-auto bg-[url(https://placehold.co/800x500)] bg-cover bg-center"></div>
    </section>
  );
}
