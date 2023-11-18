import { useState } from "react";



const Login = () => {
    const [form, setForm] = useState({
        name: "",
        password:""
    })
    const [errors, setErrors] = useState({
      validation: "",
    });

    const handleChange = (event) => {
      const property = event.target.name;
      const value = event.target.value;

      setForm({ ...form, [property]: value });
    };

    const handleSubmit = () => {
        if(form.name && form.password)console.log(form.name, form.password);
    };
    


  return (
    <section>
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
      </form>
    </section>
  );
};

export default Login;
