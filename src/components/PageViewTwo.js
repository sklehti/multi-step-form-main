import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { monthly, yearly } from "../reducers/subcriptionPlanSlice";
import { personSubcription, personInfo } from "../reducers/personInfoSlice";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvaced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

const PageViewTwo = () => {
  const dispatch = useDispatch();
  const subcription = useSelector((state) => state.subcriptionplan.value);
  const person = useSelector((state) => state.personinfo.value);

  const icons = [iconArcade, iconAdvaced, iconPro];

  useEffect(() => {
    document.getElementById("li-1").classList.remove("li-style-active");
    document.getElementById("li-2").classList.add("li-style-active");
    document.getElementById("li-3").classList.remove("li-style-active");

    document.getElementById("yearly").classList.remove("button-active");
    document.getElementById("monthly").classList.remove("button-active");
    document.getElementById(subcription.period).classList.add("button-active");

    if (subcription.period === "monthly") {
      document.getElementById("yearly-label").classList.remove("period-label");
      document.getElementById("monthly-label").classList.add("period-label");
    } else {
      document.getElementById("monthly-label").classList.remove("period-label");
      document.getElementById("monthly-label").classList.add("period-label");
    }

    document
      .getElementById(person.subcription.plan)
      .classList.add("page-view-two-button-active");
  }, []);

  useEffect(() => {
    subcription.subcription.map((s) => {
      return document
        .getElementById(s.plan)
        .classList.remove("page-view-two-button-active");
    });

    document
      .getElementById(person.subcription.plan)
      .classList.add("page-view-two-button-active");
  }, [subcription, person.subcription]);

  const handleMonthlyPeriod = (e) => {
    e.preventDefault();

    document.getElementById("yearly").classList.remove("button-active");
    document.getElementById("monthly").classList.add("button-active");
    document.getElementById("monthly-label").classList.remove("period-label");
    document.getElementById("yearly-label").classList.add("period-label");

    dispatch(monthly());
    dispatch(personInfo());
  };

  const handleYearlyPeriod = (e) => {
    e.preventDefault();

    document.getElementById("monthly").classList.remove("button-active");
    document.getElementById("yearly").classList.add("button-active");
    document.getElementById("yearly-label").classList.remove("period-label");
    document.getElementById("monthly-label").classList.add("period-label");

    dispatch(yearly());
    dispatch(personInfo());
  };

  const handleSubcription = (e, p) => {
    e.preventDefault();

    dispatch(personSubcription(p));
  };

  return (
    <div>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <div className="page-view-two-div">
        <div className="page-view-two-desktop">
          {subcription.subcription.map((p, index) => (
            <button
              className="page-view-two-button"
              key={index}
              id={p.plan}
              onClick={(e) => handleSubcription(e, p)}
            >
              <div className="icon-desktop-style">
                <img src={icons[index]} alt="pro" />
              </div>
              <div className="page-view-two-title">
                {p.plan}
                <div className="page-view-two-price">{p.price}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="payment-period">
          <div id="monthly-label">Monthly</div>
          <div className="period-button">
            <div id="monthly" type="button" onClick={handleMonthlyPeriod}>
              <div className="button-inactive"></div>
            </div>
            <div id="yearly" type="button" onClick={handleYearlyPeriod}>
              <div className="button-active button-inactive"></div>
            </div>
          </div>
          <div id="yearly-label">Yearly</div>
        </div>
      </div>
    </div>
  );
};

export default PageViewTwo;
