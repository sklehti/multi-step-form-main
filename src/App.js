import "./styles.css";
import bgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "./assets/images/bg-sidebar-desktop.svg";
import PageViewOne from "./components/PageViewOne";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reducers/pageNumberSlice";
import PageViewTwo from "./components/PageViewTwo";
import PageViewThree from "./components/PageViewThree";

function App() {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.personinfo.value);
  const pageNumber = useSelector((state) => state.pagenumber.value);

  const handleGoBack = (e) => {
    e.preventDefault();

    dispatch(decrement());
    console.log(person, " laskee ", pageNumber);
  };

  const handleView = (e) => {
    e.preventDefault();

    switch (pageNumber) {
      case 1:
        dispatch(increment());
        console.log(person, " nousee ", pageNumber);
        break;
      case 2:
        dispatch(increment());
        console.log("sivu 2", pageNumber);
        break;
      case 3:
        dispatch(increment());
        console.log("Sivu 3", pageNumber);
        break;
      case 4:
        console.log("Sivu 4");
        break;
      default:
        throw new Error("Something went wrong.");
    }
  };

  return (
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
      </div>

      <div>
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
              ) : (
                <></>
              )}
            </div>
            <div className="footer">
              {pageNumber > 1 ? (
                <button className="back-button" onClick={handleGoBack}>
                  Go Back
                </button>
              ) : (
                <></>
              )}

              <button
                className="main-button"
                type="submit"
                onClick={handleView}
              >
                Next Step
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

// TODO: all text here!!
// <!-- Sidebar start -->

//     Step 1 Your info Step 2 Select plan Step 3 Add-ons Step 4 Summary

//     <!-- Sidebar end -->

//     <!-- Step 2 start -->

//      Arcade
//     $9/mo Advanced $12/mo Pro $15/mo Monthly Yearly Go Back Next Step

//     <!-- Step 2 end -->

//     <!-- Step 3 start -->

//      Online service
//     Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud save
//     +$2/mo Customizable Profile Custom theme on your profile +$2/mo Go Back Next
//     Step

//     <!-- Step 3 end -->

//     <!-- Step 4 start -->

//     Finishing up Double-check everything looks OK before confirming.

//     <!-- Dynamically add subscription and add-on selections here -->

//     Total (per month/year) Go Back Confirm

//     <!-- Step 4 end -->

//     <!-- Step 5 start -->

//     Thank you! Thanks for confirming your subscription! We hope you have fun
//     using our platform. If you ever need support, please feel free to email us
//     at support@loremgaming.com.

//     <!-- Step 5 end -->
