import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import PageViewOne from "./PageViewOne";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reducers/pageNumberSlice";
import PageViewTwo from "./PageViewTwo";
import PageViewThree from "./PageViewThree";
import PageViewFour from "./PageViewFour";
import PageViewFive from "./PageViewFive";

function PageView() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pagenumber.value);
  const person = useSelector((state) => state.personinfo.value);

  const handleGoBack = (e) => {
    e.preventDefault();

    dispatch(decrement());
  };

  const handleView = (e) => {
    e.preventDefault();

    switch (pageNumber) {
      case 1:
        console.log(person);
        let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        let phoneno =
          /^\+?([0-9]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})?[-. ]?([0-9]{3})$/;

        if (person.name.length > 0) {
          document
            .getElementById("name-field-error")
            .classList.add("error-style-invisible");
          document.getElementById("name-field").style.border =
            "1px solid hsl(229, 24%, 87%)";

          if (person.email.length > 0 && person.email.match(mailformat)) {
            document
              .getElementById("email-field-error")
              .classList.add("error-style-invisible");

            document.getElementById("email-field").style.border =
              "1px solid hsl(229, 24%, 87%)";

            if (person.phone.length > 0 && person.phone.match(phoneno)) {
              document
                .getElementById("phone-field-error")
                .classList.add("error-style-invisible");

              document.getElementById("phone-field").style.border =
                "1px solid hsl(229, 24%, 87%)";

              dispatch(increment());
            } else {
              document
                .getElementById("phone-field-error")
                .classList.remove("error-style-invisible");

              document.getElementById("phone-field").style.border =
                "1px solid red";
            }
          } else {
            document
              .getElementById("email-field-error")
              .classList.remove("error-style-invisible");

            document.getElementById("email-field").style.border =
              "1px solid red";
          }
        } else {
          document
            .getElementById("name-field-error")
            .classList.remove("error-style-invisible");
          console.log("mitä ihmettä");
          document.getElementById("name-field").style.border = "1px solid red";
        }

        break;
      case 2:
        dispatch(increment());
        break;
      case 3:
        dispatch(increment());
        break;
      case 4:
        dispatch(increment());
        break;
      default:
        throw new Error("Something went wrong.");
    }
  };

  return (
    <div className="desktop-container">
      <div className="desktop-view">
        <div className="view-steps">
          <img
            alt="background"
            src={bgSidebarDesktop}
            className="bg-sidebar-desktop"
          />
          <ul>
            <li id="li-1" className="li-style">
              1
            </li>
            <li id="li-2" className="li-style">
              2
            </li>
            <li id="li-3" className="li-style">
              3
            </li>
            <li id="li-4" className="li-style">
              4
            </li>
          </ul>

          <ul className="desktop-ul">
            <li id="li-desktop-1" className="li-style li-style-desktop">
              <div className="li-desktop-title">STEP 1</div>
              <div>YOUR INFO</div>
            </li>
            <li id="li-desktop-2" className="li-style li-style-desktop">
              <div className="li-desktop-title">STEP 2</div>
              <div>SELECT PLAN</div>
            </li>
            <li id="li-desktop-3" className="li-style li-style-desktop">
              <div className="li-desktop-title">STEP 3</div>
              <div>ADD-ONS</div>
            </li>
            <li id="li-desktop-4" className="li-style li-style-desktop">
              <div className="li-desktop-title">STEP 4</div>
              <div>SUMMARY</div>
            </li>
          </ul>
        </div>

        <div className="form-view">
          <form>
            <div>
              <img
                alt="background"
                src={bgSidebarMobile}
                className="bg-sidebar-mobile"
              />
            </div>

            <div>
              <div className="main-modal">
                {Number(pageNumber) === 1 ? (
                  <PageViewOne />
                ) : Number(pageNumber) === 2 ? (
                  <PageViewTwo />
                ) : Number(pageNumber) === 3 ? (
                  <PageViewThree />
                ) : Number(pageNumber) === 4 ? (
                  <PageViewFour />
                ) : Number(pageNumber) === 5 ? (
                  <PageViewFive />
                ) : (
                  <></>
                )}
              </div>
              <div id="footer" className="footer">
                {pageNumber > 1 ? (
                  <button className="back-button" onClick={handleGoBack}>
                    Go Back
                  </button>
                ) : (
                  <></>
                )}
                {pageNumber !== 4 ? (
                  <button className="main-button" onClick={handleView}>
                    Next Step
                  </button>
                ) : (
                  <button
                    className="main-button confirm-button"
                    type="submit"
                    onClick={handleView}
                  >
                    Confirm
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PageView;
