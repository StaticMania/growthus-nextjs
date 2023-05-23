"use client";
import {counterData} from "@/Data/Data.js";
import { useState, useEffect } from "react";
const Counter = () => {
  const CountUpNumber = ({ number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (count < number) {
        const timer = setTimeout(() => {
          setCount(count + 2);
        }, 10);

        return () => clearTimeout(timer);
      }
    }, [count, number]);

    return <span className="counter">{count}</span>;
  };
  return (
    <section className="counter-up pb-lg-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="counter-wraper py-4 py-md-6 d-md-flex">
              {CounterData.map((item, i) => {
                return (
                  <div className="counter-up-content mb-3" key={i}>
                    <div className="counter-up-content-item">
                      <div className="counter-percent">
                        {<CountUpNumber number={item.number} />}
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
  );
};
export default Counter;
