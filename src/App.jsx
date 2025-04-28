// src/App.jsx
import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import WorkingExperience from './components/WorkingExperience';
import Hobbies from './components/Hobbies';
import Preview from './components/Preview';

function App() {
  const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '', about: '' });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [isPreview, setIsPreview] = useState(false);

  const handleSaveCV = () => {
    setIsPreview(true);
  };

  return (
    <div className="App">
      <h1>My CV</h1>

      {isPreview ? (
        <Preview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          hobbies={hobbies}
        />
      ) : (
        <>
          <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
          <Education data={education} setData={setEducation} />
          <WorkingExperience data={experience} setData={setExperience} />
          <Hobbies data={hobbies} setData={setHobbies} />
          <button onClick={handleSaveCV}>Save CV</button>
        </>
      )}
    </div>
  );
}

export default App;
