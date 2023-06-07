"use client";

import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/Common/PageHero.jsx";
import { CaseStudy } from "@/components/CaseStudy";
import { caseStudyData } from "@/data/data.js";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useTitle from "@/hooks/useTitle";

export default function CaseStudyPage() {
  useTitle("Grouwthus | Case Study");
  const categories = ["All project", "Design", "Development", "Marketing"];
  const [filterData, setFilterData] = useState([...caseStudyData]);
  const [active, setActive] = useState(0);

  const handleClick = (category) => {
    if (category !== "All project") {
      const data = caseStudyData.filter((item) =>
        item.category.includes(category)
      );
      setFilterData(data);
      return;
    }
    setFilterData(caseStudyData);
  };

  return (
    <>
      <PageHero
        pageTitle={
          <>
            <span>Let’s See </span> <br /> <span> Our Recent Work </span>
          </>
        }
      />
      <section className="project pt-lg-7 pt-4 pb-lg-7 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="isotop-menu button-group-home pt-2 mb-lg-6 mb-4">
                {categories?.map((btn, index) => (
                  <button
                    key={btn}
                    className={index === active ? "is-checked" : ""}
                    onClick={() => {
                      handleClick(btn);
                      setActive(index);
                    }}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <motion.div layout className="row">
            {filterData.map((item) => (
              <AnimatePresence key={item.id}>
                <CaseStudy key={item.id} props={item} />
              </AnimatePresence>
            ))}
          </motion.div>
        </div>
      </section>

      <CallToAction
        title={
          <>
            <span>Sounds Good? </span> <br />{" "}
            <span>Let’s Grow your Business.</span>
          </>
        }
      />
    </>
  );
}
