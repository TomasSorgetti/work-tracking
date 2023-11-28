import { useState } from "react";
import LoginForm from "../components/LoginForm";
import CreateUser from "../components/CreateUser";



const Login = () => {
  const [activeForm, setActiveForm] = useState(true);
  const handleActiveForm = () => {
    setActiveForm(!activeForm)
  }
  return (
    <section>
      {activeForm ? (
        <LoginForm
          handleActiveForm={handleActiveForm}
        />
      ) : (
        <CreateUser
          handleActiveForm={handleActiveForm}
        />
      )}
    </section>
  );
};

export default Login;
