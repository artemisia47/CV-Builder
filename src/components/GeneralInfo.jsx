// src/components/GeneralInfo.jsx
import React from 'react';
import './styles/GeneralInfo.css';

export default function GeneralInfo({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      <form>
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <textarea
          name="about"
          value={data.about}
          onChange={handleChange}
          placeholder="About Me"
        />
      </form>
    </div>
  );
}
