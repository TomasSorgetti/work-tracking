import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/")
  };
  return (
    <div>
      <h1>Home Component</h1>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}

export default Home