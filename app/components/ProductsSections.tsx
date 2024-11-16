import React from "react";
import PromoSection from "./PromoSection";
import HairSection from "./HairSection";
import SlidingDivider from "./SlidingDivider";
import SkinSection from "./SkinSection";
import FaceSection from "./FaceSection";
import AutoBronzerSection from "./AutoBronzerSection";
import TanSection from "./TanSection";
import ShineSection from "./ShineSection";
import SPFSection from "./SPFSection";

export default function ProductsSections() {
  return (
    <>
      <PromoSection />
      <HairSection />
      <SlidingDivider />
      <SkinSection />
      <FaceSection />
      <AutoBronzerSection />
      <TanSection />
      <ShineSection />
      <SPFSection />
    </>
  );
}
