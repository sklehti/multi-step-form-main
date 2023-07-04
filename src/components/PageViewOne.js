import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  personName,
  personEmail,
  personPhone,
} from "../reducers/personInfoSlice";

const PageViewOne = () => {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.personinfo.value);

  useEffect(() => {
    document.getElementById("li-2").classList.remove("li-style-active");
    document.getElementById("li-1").classList.add("li-style-active");
  }, []);

  return (
    <div>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="page-view-one-div">
        <div className="label-div">
          <label>Name</label>
        </div>
        <input
          type="text"
          name="name"
          placeholder="e.g. Stephen King"
          value={person.name}
          onChange={(e) => dispatch(personName(e.target.value))}
        />
      </div>

      <div className="page-view-one-div">
        <div className="label-div">
          <label>Email Address</label>
        </div>
        <input
          type="text"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          value={person.email}
          onChange={(e) => dispatch(personEmail(e.target.value))}
        />
      </div>

      <div className="page-view-one-div">
        <div className="label-div">
          <label>Phone Number</label>
        </div>
        <input
          type="text"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          value={person.phone}
          onChange={(e) => dispatch(personPhone(e.target.value))}
        />
      </div>
    </div>
  );
};

export default PageViewOne;
