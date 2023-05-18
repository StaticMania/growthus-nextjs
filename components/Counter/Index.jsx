"use client";
"Use Client";
import React from "react";
import CountUp from "react-countup";
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
                <div className="counter-up-content mb-3">
                  <div className="counter-up-content-item">
                    <div className="counter-percent">
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={100}
                          delay={0}
                          className="counter"
                        />
                      )}
                      <span className="percent">+</span>
                    </div>
                    <h3>Project Done</h3>
                  </div>
                </div>
                <div className="counter-up-content">
                  <div className="counter-up-content-item">
                    <div className="counter-percent">
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={45}
                          delay={0}
                          className="counter"
                        />
                      )}
                      <span className="percent">+</span>
                    </div>
                    <h3>Happy Client</h3>
                  </div>
                </div>
                <div className="counter-up-content">
                  <div className="counter-up-content-item">
                    <div className="counter-percent">
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={10}
                          delay={0}
                          className="counter"
                        />
                      )}
                      <span className="percent">+</span>
                    </div>
                    <h3>Years Experiences</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};
export default Counter;
