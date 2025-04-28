// src/components/WorkingExperience.jsx
import React, { useState } from 'react';
import './styles/WorkingExperience.css';

export default function WorkingExperience({ data, setData }) {
  const [newExp, setNewExp] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    until: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExp({ ...newExp, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newExp.company || !newExp.position) return;
    setData([...data, newExp]);
    setNewExp({ company: '', position: '', responsibilities: '', from: '', until: '' });
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="working-experience">
      <h2>Working Experience</h2>
      <form onSubmit={handleAdd}>
        <input name="company" value={newExp.company} onChange={handleChange} placeholder="Company Name" />
        <input name="position" value={newExp.position} onChange={handleChange} placeholder="Position Title" />
        <textarea name="responsibilities" value={newExp.responsibilities} onChange={handleChange} placeholder="Main Responsibilities" />
        <label>
    From:
    <input type="date" name="from" value={newExp.from} onChange={handleChange} />
  </label>
  
  <label>
    Until:
    <input type="date" name="until" value={newExp.until} onChange={handleChange} />
  </label>
        <button type="submit">Add Experience</button>
      </form>

      {data.map((exp, index) => (
        <div key={index} className="experience-item">
          <p><strong>Company:</strong> {exp.company}</p>
          <p><strong>Position:</strong> {exp.position}</p>
          <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
          <p><strong>From:</strong> {exp.from} <strong>Until:</strong> {exp.until}</p>
          <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
