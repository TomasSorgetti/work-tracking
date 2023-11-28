import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = ({ handleActiveForm }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    password: "",
    repeatPassword: "",
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
    e.preventDefault();
    const URL = "http://localhost:3001/user";
    if (form.name && form.password) {
      await axios.post(URL, form).then((response) => {
        if (response.status !== 200) {
          console.log("error at create user");
        }
        handleActiveForm();
      });
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
      <div>
        <label htmlFor="">Repeat password</label>
        <input
          type="password"
          name="repeatPassword"
          value={form.repeatPassword}
          onChange={handleChange}
        />
      </div>
      <button>Create user</button>
      <span onClick={handleActiveForm}>You already have account?</span>
    </form>
  );
};

export default CreateUser;
