import { useState } from "react"

const CreateWork = () => {
  const [form, setForm] = useState({
    position: "",
    company: "",
    path: "",
    response: "",
    firstInterview: "",
    secondInterview: "",
    thirdInterview: "",
    comentary: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

    const handleSubmit = async (e) => {
        e.preventDefault()
      const URL = "http://localhost:3001/jobs"
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Position</label>
        <input
          type="text"
          name="position"
          value={form.position}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Company:</label>
        <input name="company" value={form.company} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Link:</label>
        <input name="path" value={form.path} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Response:</label>
        <input name="response" value={form.response} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">First Interview:</label>
        <input
          name="firstInterview"
          value={form.firstInterview}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Second Interview:</label>
        <input
          name="secondInterview"
          value={form.secondInterview}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Third Interview:</label>
        <input name="thirdInterview" value={form.thirdInterview} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Comentary:</label>
        <textarea name="comentary" value={form.comentary} onChange={handleChange} />
      </div>

      <button>Add New</button>
    </form>
  );
}

export default CreateWork