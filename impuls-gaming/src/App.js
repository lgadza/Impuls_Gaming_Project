import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styling/home.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import GiftCard from "./components/GiftCard";
import LogInPage from "./pages/registration/LogInPage";
import SignIn from "./pages/registration/LogIn";
import UserPage from "./pages/userPage/UserPage";
import "react-circular-progressbar/dist/styles.css";
import Organizer from "./pages/backoffice/Organizer";
import TournamentOverview from "./pages/backoffice/TournamentOverview";
import BackOffice from "./pages/backoffice/BackOffice";
import ActivateRegistration from "./pages/backoffice/ActivateRegistration";
import ParticipantCheckin from "./pages/backoffice/ParticipantCheckin";
import Settings from "./pages/backoffice/Settings";
import Match from "./pages/backoffice/Match";
import Participants from "./pages/backoffice/Participants";
import TournamentDetails from "./components/TournamentDetails";
import GeneralSettings from "./pages/backoffice/GeneralSettings";

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
          <Route element={<BackOffice />} path="/backoffice" />
          <Route
            element={<TournamentOverview />}
            path="/backoffice/projects/overview/:tournamentId"
          />
          <Route
            element={<Settings />}
            path="/backoffice/projects/settings/:tournamentId"
          />
          <Route
            element={<Participants />}
            path="/backoffice/projects/participants/:tournamentId"
          />
          <Route
            element={<ActivateRegistration />}
            path="/backoffice/projects/settings/:tournament/registration"
          />
          <Route
            element={<Match />}
            path="/backoffice/projects/settings/:tournament/matches"
          />
          <Route
            element={<ParticipantCheckin />}
            path="/backoffice/projects/settings/:tournament/participants"
          />
          <Route
            element={<TournamentDetails />}
            path="/tournaments/:tournamentId"
          />
          <Route
            element={<GeneralSettings />}
            path="/backoffice/projects/settings/:tournamentId/edit"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
