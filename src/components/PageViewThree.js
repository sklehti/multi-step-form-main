import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOns, removeAddOns } from "../reducers/personInfoSlice";

const PageViewThree = () => {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.personinfo.value);
  const subcription = useSelector(
    (state) => state.subcriptionplan.value.addOnsPrice
  );

  useEffect(() => {
    document.getElementById("li-2").classList.remove("li-style-active");
    document.getElementById("li-4").classList.remove("li-style-active");
    document.getElementById("li-3").classList.add("li-style-active");
  }, []);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    person.addOns.map((p) => {
      if (p.addOnsName.includes("Customizable profile")) {
        document.getElementById("customizable-profile-checkbox").checked = true;
        document
          .getElementById("customizable-profile")
          .classList.add("page-view-two-button-active");
      }

      if (p.addOnsName.includes("Online service")) {
        document.getElementById("online-service-checkbox").checked = true;
        document
          .getElementById("online-service")
          .classList.add("page-view-two-button-active");
      }

      if (p.addOnsName.includes("Larger storage")) {
        document.getElementById("larger-storage-checkbox").checked = true;
        document
          .getElementById("larger-storage")
          .classList.add("page-view-two-button-active");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleService = (e) => {
    if (e.target.checked) {
      document
        .getElementById("online-service")
        .classList.add("page-view-two-button-active");

      dispatch(
        addOns({
          addOnsName: "Online service",
          addOnsrice: subcription[0].price,
        })
      );
    } else {
      document
        .getElementById("online-service")
        .classList.remove("page-view-two-button-active");
      dispatch(
        removeAddOns({
          personinfo: person,
          addOnsName: "Online service",
          addOnsrice: subcription[0].price,
        })
      );
    }
  };

  const handleStorage = (e) => {
    if (e.target.checked) {
      document
        .getElementById("larger-storage")
        .classList.add("page-view-two-button-active");

      dispatch(
        addOns({
          addOnsName: "Larger storage",
          addOnsrice: subcription[1].price,
        })
      );
    } else {
      document
        .getElementById("larger-storage")
        .classList.remove("page-view-two-button-active");

      dispatch(
        removeAddOns({
          personinfo: person,
          addOnsName: "Larger storage",
          addOnsrice: subcription[1].price,
        })
      );
    }
  };

  const handleProfile = (e) => {
    if (e.target.checked) {
      document
        .getElementById("customizable-profile")
        .classList.add("page-view-two-button-active");

      dispatch(
        addOns({
          addOnsName: "Customizable profile",
          addOnsrice: subcription[2].price,
        })
      );
    } else {
      document
        .getElementById("customizable-profile")
        .classList.remove("page-view-two-button-active");

      dispatch(
        removeAddOns({
          personinfo: person,
          addOnsName: "Customizable profile",
          addOnsrice: subcription[2].price,
        })
      );
    }
  };

  return (
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="page-view-three-div">
        <div id="online-service" className="page-view-three-box">
          <div className="checkbox-container">
            <label className="container">
              Online service
              <div className="page-view-three-text">
                Access to multiplayer games
              </div>
              <input
                id="online-service-checkbox"
                type="checkbox"
                onClick={handleService}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="page-view-three-price">{subcription[0].price}</div>
        </div>

        <div id="larger-storage" className="page-view-three-box">
          <div className="checkbox-container">
            <label className="container">
              Larger storage
              <div className="page-view-three-text">
                Extra 1TB of cloud save
              </div>
              <input
                id="larger-storage-checkbox"
                type="checkbox"
                onClick={handleStorage}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="page-view-three-price">{subcription[1].price}</div>
        </div>

        <div id="customizable-profile" className="page-view-three-box">
          <div className="checkbox-container">
            <label className="container">
              Customizable Profile
              <div className="page-view-three-text">
                Custom theme on your profile
              </div>
              <input
                id="customizable-profile-checkbox"
                type="checkbox"
                onClick={handleProfile}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="page-view-three-price">{subcription[2].price}</div>
        </div>
      </div>
    </div>
  );
};

export default PageViewThree;
