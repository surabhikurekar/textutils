import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // wheteher dark mode is anabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils- Dark Mode";

      //  To give Constant Reminder in webName section (title)
      // setInterval(() => {
      //   document.title= "TextUtil is Amazing";
      // }, 2000);

      // setInterval(() => {
      //   document.title= "Install TextUtil ";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Navbar title="TextUtils" AboutText="About"  HomePage="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter Your Text Below" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </> 
  );
}

export default App;

