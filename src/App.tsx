import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import LeftNav from "./components/leftNav";
import RightNav from "./components/rightNav";

function App() {
  const headingValue = "Welcome to react Project";
  const footerValue = "End of react Project";
  const leftNav = {
    item1: "menu",
    item2: "Edit",
    item3: "view",
  };
  const rightNav = {
    item1: "Login",
    item2: "LogOut",
    item3: "Register",
  };
  return (
    <>
      <div className="header">
        <Header heading={headingValue} />
      </div>
      <div className="container">
        <div className="left">
          <LeftNav
            firstItem={leftNav.item1}
            secondItem={leftNav.item2}
            thirdItem={leftNav.item3}
          />
        </div>
        <div className="right">
          <RightNav
            firstItem={rightNav.item1}
            secondItem={rightNav.item2}
            thirdItem={rightNav.item3}
          />
        </div>
      </div>
      <div className="footer">
        <Footer footer={footerValue} />
      </div>
    </>
  );
}

export default App;



