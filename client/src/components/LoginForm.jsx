import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const LoginForm = ({ handleActiveForm }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    validation: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

    const handleSubmit = async (e) => {
        e.preventDefault()
      const URL = "http://localhost:3001/user/login";
      if (form.name && form.password){
          await axios.post(URL, form).then((response) => {
              const token = response.data.token
              localStorage.setItem("token", token)
              navigate("/home")
          })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button>Login</button>
      <span onClick={handleActiveForm}>You dont have account?</span>
    </form>
  );
};

export default LoginForm;
