import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import iconThankYou from "../assets/images/icon-thank-you.svg";

const PageViewFive = () => {
  const person = useSelector((state) => state.personinfo.value);
  console.log(person, " person info");

  useEffect(() => {
    document.getElementById("footer").style.visibility = "hidden";
  });

  return (
    <div>
      <img className="thank-you-icon" src={iconThankYou} alt="thank you icon" />
      <h2 className="page-view-five-title">Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default PageViewFive;
