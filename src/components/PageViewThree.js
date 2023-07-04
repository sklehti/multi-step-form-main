import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PageViewThree = () => {
  const person = useSelector((state) => state.personinfo.value);

  console.log(person, " person info");

  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="page-view-one-div">testi</div>
    </div>
  );
};

export default PageViewThree;
