import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreateWork from "./Pages/CreateWork";
import ErrorPage from "./Pages/ErrorPage";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";

function App() {

  return (
    <Routes>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/home" element={<Home />} />
        <Route path="/addNew" element={<CreateWork />} />
      </Route>
      <Route index element={<Login />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
