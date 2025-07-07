import React, { useState } from "react";

export default function MultiStepForm() {
  const [form, setForm] = useState([
    {
      name: "",
      email: "",
      age: "",
      phno: "",
      gender: "",
      anime: "",
    },
  ]);
  const [page, setPage] = useState(1);

  const handleSubmit = () => {
    alert(`
    name: ${form.name}
    email: ${form.email}
    age: ${form.age}
    phno: ${form.phno}
    gender: ${form.gender}
    anime: ${form.anime}
  `);
  setForm('')
  };

  return (
    <div>
      <h1>MultiStepForm</h1>
      <div>
        {page === 1 && (
          <div>
            <input
              placeholder="enter ur name "
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value })}
            />
            <br /> <br />
            <input
              placeholder="enter ur age"
              value={form.age}
              onChange={(e) => setForm({ ...form,age: e.target.value })}
            />
            <br /> <br />
            <button onClick={() => setPage(2)}>Next page </button>
          </div>
        )}
        {page === 2 && (
          <div>
            <input
              placeholder="enter ur email "
              value={form.email}
              onChange={(e) => setForm({ ...form,email: e.target.value })}
            />
            <br /> <br />
            <input
              placeholder="enter ur phno"
              value={form.phno}
              onChange={(e) => setForm({ ...form,phno: e.target.value })}
            />
            <br /> <br />
            <button onClick={() => setPage(3)}>Next page </button>
          </div>
        )}
        {page === 3 && (
          <div>
            <input
              placeholder="enter ur gender "
              value={form.gender}
              onChange={(e) => setForm({...form, gender: e.target.value })}
            />
            <br /> <br />
            <input
              placeholder="enter ur anime"
              value={form.anime}
              onChange={(e) => setForm({...form, anime: e.target.value })}
            />
            <br /> <br />
            <button onClick={handleSubmit}>Submit </button>
          </div>
        )}
      </div>

      <h4>
        Your form has been submitted, da lavda. Here are the details: <br />
        Name: {form.name} <br />
        Email: {form.email} <br />
        Age: {form.age} <br />
        Phone: {form.phno} <br />
        Gender: {form.gender} <br />
        Anime: {form.anime}
      </h4>
    </div>
  );
}
