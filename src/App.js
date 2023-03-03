import "./App.css";
import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Filter from "./components/Filter";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Profile from "./components/Profile";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Filter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
