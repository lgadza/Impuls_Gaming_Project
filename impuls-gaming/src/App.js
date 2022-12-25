import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styling/home.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import GiftCard from "./components/GiftCard";
import LogInPage from "./components/LogInPage";
import SignIn from "./components/LogIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavigationBar /> */}
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<GiftCard />} path="/giftcard" />
          <Route element={<LogInPage />} path="/sign-up" />
          <Route element={<SignIn />} path="/sign-in" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
