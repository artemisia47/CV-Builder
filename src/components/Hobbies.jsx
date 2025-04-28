// src/components/Hobbies.jsx
import React, { useState } from 'react';
import './styles/Hobbies.css';

export default function Hobbies({ data, setData }) {
  const [newHobby, setNewHobby] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newHobby.trim()) return;
    setData([...data, newHobby]);
    setNewHobby('');
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="hobbies">
      <h2>Hobbies</h2>
      <form onSubmit={handleAdd}>
        <input
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
          placeholder="Enter a hobby"
        />
        <button type="submit">Add Hobby</button>
      </form>

      <ul>
        {data.map((hobby, index) => (
          <li key={index}>
            {hobby}
            <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
