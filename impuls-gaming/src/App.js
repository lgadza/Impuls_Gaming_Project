import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styling/home.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import GiftCard from "./components/GiftCard";
import LogInPage from "./pages/LogInPage";
import SignIn from "./pages/LogIn";
import UserPage from "./pages/UserPage";
import "react-circular-progressbar/dist/styles.css";
import Organizer from "./components/Organizer";
import TournamentOverview from "./components/TournamentOverview";
import BackOffice from "./components/BackOffice";

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
          <Route element={<UserPage />} path="/user-page" />
          <Route element={<BackOffice />} path="/backoffice-projects" />
          <Route
            element={<TournamentOverview />}
            path="/backoffice-projects/projects/overview/:tournamentId"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
