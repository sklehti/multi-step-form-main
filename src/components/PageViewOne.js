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
          <label>
            <div>Name</div>
            <div
              id="name-field-error"
              className="input-title-error error-style-invisible"
            >
              Fill in this field
            </div>
          </label>
        </div>
        <input
          id="name-field"
          className="page-view-one-input-style"
          type="text"
          name="name"
          placeholder="e.g. Stephen King"
          value={person.name}
          onChange={(e) => dispatch(personName(e.target.value))}
        />
      </div>

      <div className="page-view-one-div">
        <div className="label-div">
          <label>
            <div>Email Address</div>
            <div
              id="email-field-error"
              className="input-title-error error-style-invisible"
            >
              Fill in this field (example@mail.com)
            </div>
          </label>
        </div>
        <input
          id="email-field"
          className="page-view-one-input-style input-field-error"
          type="text"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          value={person.email}
          onChange={(e) => dispatch(personEmail(e.target.value))}
        />
      </div>

      <div className="page-view-one-div">
        <div className="label-div">
          <label>
            <div>Phone Number</div>
            <div
              id="phone-field-error"
              className="input-title-error error-style-invisible"
            >
              Fill in this field (10 digits)
            </div>
          </label>
        </div>
        <input
          id="phone-field"
          className="page-view-one-input-style input-field-error"
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
