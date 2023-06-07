import React from "react";
import CareerHeroItem from "./CareerHeroItem";
import { CareerHeroData } from "@/data/data.js";
function CareerHero() {
  return <CareerHeroItem data={CareerHeroData} />;
}

export default CareerHero;
