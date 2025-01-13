import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import FormPage from "./components/FormPage";
import FetchUserPage from "./components/FetchUserPage";
import FormDisplayPage from "./components/FormDisplayPage"; // Import your display page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/fetch-user" element={<FetchUserPage />} />
        <Route path="/form-display" element={<FormDisplayPage />} />{" "}
        {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
