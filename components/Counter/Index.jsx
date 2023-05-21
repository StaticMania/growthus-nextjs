"use client";
"Use Client";
import React from "react";
import CountUp from "react-countup";
import CounterData from "./CounterData";
import {useState} from "react";
import ScrollTrigger from "react-scroll-trigger";
const Counter = () => {
  const [counterOn, setCounterOn] = useState(true);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="counter-up pb-lg-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="counter-wraper py-4 py-md-6 d-md-flex">
                {CounterData.map((item, i) => {
                  return (
                    <div
                      className="counter-up-content mb-3"
                      key={i}
                    >
                      <div className="counter-up-content-item">
                        <div className="counter-percent">
                          {counterOn && (
                            <CountUp
                              start={0}
                              end={`${item.number}`}
                              delay={0}
                              className="counter"
                            />
                          )}
                          <span className="percent">+</span>
                        </div>
                        <h3>{item.text}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};
export default Counter;
