import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../reducers/pageNumberSlice";

const PageViewFour = () => {
  const dispatch = useDispatch();

  const person = useSelector((state) => state.personinfo.value);
  const subcription = useSelector((state) => state.subcriptionplan.value);

  let regex = /\d+/g;
  let totalPrice = Number(person.subcription.price.match(regex));

  person.addOns.map((p) => {
    totalPrice += Number(p.addOnsrice.match(regex));
    return null;
  });

  useEffect(() => {
    document.getElementById("li-3").classList.remove("li-style-active");
    document.getElementById("li-4").classList.add("li-style-active");
  }, []);

  const handleChange = () => {
    dispatch(decrement());
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="page-view-four-style">
        <div className="page-view-four-box">
          <div>
            {`${person.subcription.plan}(${subcription.period})`}
            <div className="page-view-three-text">
              <button id="change-button" onClick={handleChange}>
                Change
              </button>
            </div>
          </div>
          <div className="page-view-four-main-price">
            {person.subcription.price}
          </div>
        </div>
        <hr />

        {person.addOns.map((p, index) => (
          <div key={index}>
            <div className="page-view-four-box">
              <div className="page-view-four-addons">{p.addOnsName}</div>
              <div className="page-view-four-addons-price">{p.addOnsrice}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="page-view-four-box total-box-style">
        <div className="page-view-four-addons">Total</div>
        <div
          style={{ color: "hsl(243, 100%, 62%)" }}
        >{`$${totalPrice}/mo`}</div>
      </div>
    </div>
  );
};

export default PageViewFour;
