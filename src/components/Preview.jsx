// src/components/Preview.jsx
import React from 'react';
import html2pdf from 'html2pdf.js';
import './styles/Preview.css';

export default function Preview({ generalInfo, education, experience, hobbies }) {
  const handleDownloadPDF = () => {
    const element = document.getElementById('cv-preview');
    const opt = {
      margin: 0.5,
      filename: 'my_cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="preview-wrapper">
      <button onClick={handleDownloadPDF}>Download CV as PDF</button>

      <div id="cv-preview" className="preview-content">
        <h2>{generalInfo.name}</h2>
        <p><strong>Email:</strong> {generalInfo.email}</p>
        <p><strong>Phone:</strong> {generalInfo.phone}</p>
        <p><strong>About:</strong> {generalInfo.about}</p>

        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <p><strong>School:</strong> {edu.school}</p>
            <p><strong>Title:</strong> {edu.title}</p>
            <p><strong>Date:</strong> {edu.date}</p>
          </div>
        ))}

        <h3>Work Experience</h3>
        {experience.map((exp, index) => (
          <div key={index}>
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Position:</strong> {exp.position}</p>
            <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
            <p><strong>From:</strong> {exp.from} <strong>Until:</strong> {exp.until}</p>
          </div>
        ))}

        <h3>Hobbies</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
