"use client";
import CareerHeroItem from "./CareerHeroItem";
import { careerHeroData } from "@/data/data.js";
function CareerHero() {
  return <CareerHeroItem data={careerHeroData} />;
}

export default CareerHero;
