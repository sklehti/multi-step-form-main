import "./styles.css";
import bgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";
import PageViewOne from "./components/PageViewOne";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reducers/pageNumberSlice";
import PageViewTwo from "./components/PageViewTwo";
import PageViewThree from "./components/PageViewThree";
import PageViewFour from "./components/PageViewFour";
import PageViewFive from "./components/PageViewFive";

function App() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pagenumber.value);

  const handleGoBack = (e) => {
    e.preventDefault();

    dispatch(decrement());
  };

  const handleView = (e) => {
    e.preventDefault();

    switch (pageNumber) {
      case 1:
        dispatch(increment());
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
                    className="main-button"
                    style={{ backgroundColor: "hsl(243, 100%, 62%)" }}
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

export default App;
