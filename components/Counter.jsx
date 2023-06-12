"use client";
import { counterData } from "@/data/data.js";
import CounterAnimation from "./CounterAnimation";

const Counter = () => {
  return (
    <section className="counter-up pb-lg-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="counter-wraper py-4 py-md-6 d-md-flex">
              {counterData.map((item, i) => (
                <div className="counter-up-content mb-3" key={i}>
                  <div className="counter-up-content-item">
                    <div className="counter-percent">
                      <CounterAnimation number={item.number} />
                      <span className="percent">+</span>
                    </div>
                    <h3>{item.text}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Counter;
