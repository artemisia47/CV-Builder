// src/components/Education.jsx
import React, { useState } from 'react';
import './styles/Education.css';

export default function Education({ data, setData }) {
  const [newEdu, setNewEdu] = useState({ school: '', title: '', date: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEdu({ ...newEdu, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newEdu.school || !newEdu.title) return;
    setData([...data, newEdu]);
    setNewEdu({ school: '', title: '', date: '' });
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="education">
      <h2>Education</h2>
      <form onSubmit={handleAdd}>
        <input name="school" value={newEdu.school} onChange={handleChange} placeholder="School Name" />
        <input name="title" value={newEdu.title} onChange={handleChange} placeholder="Title of Study" />
        <input type="date" name="date" value={newEdu.date} onChange={handleChange} />
        <button type="submit">Add Education</button>
      </form>

      {data.map((edu, index) => (
        <div key={index} className="education-item">
          <p><strong>School:</strong> {edu.school}</p>
          <p><strong>Title:</strong> {edu.title}</p>
          <p><strong>Date:</strong> {edu.date}</p>
          <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
