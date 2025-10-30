import { useState } from 'react'
import Editor from './components/editor'
import Preview from './components/preview'
import PersonalInfo from './components/personalInfo';
import EducationInfo from './components/educationInfo';
import './App.css'
import ExperienceInfo from './components/experienceInfo';


function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const clearPersonalInfo = () => {
    setPersonalInfo({});
  }
  const clearEducation = () => {
    setEducation([]);
  }

  const clearExperience = () => {
    setExperience([]);
  }

  const handlePersonalInfo = () => {
    let fullName = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let address = document.querySelector('#address').value;

    setPersonalInfo({
      fullName,
      email,
      phone,
      address
    });
  }

  const handleEducation = () => {
    let school = document.querySelector('#school').value;
    let degree = document.querySelector('#degree').value;
    let city = document.querySelector('#city').value;
    let country = document.querySelector('#country').value;
    let startDate = document.querySelector('#start-date').value;
    let endDate = document.querySelector('#end-date').value;

    setEducation([
      ...education,
      {
        school,
        degree,
        location: `${city}, ${country}`,
        period: `${startDate} to ${endDate}`,
      },
    ]);
  }

  const handleExperience = () => {
    let jobTitle = document.querySelector('#job-title').value;
    let company = document.querySelector('#company').value;
    let description = document.querySelector('#description').value;
    let jobStartDate = document.querySelector('#job-start-date').value;
    let jobEndDate = document.querySelector('#job-end-date').value;

    setExperience([
      ...experience,
      {
        jobTitle,
        company,
        period: `${jobStartDate} to ${jobEndDate}`,
        description,
      },
    ]);
  }

  return (
    <>
      <Editor 
        handlePersonalInfo={handlePersonalInfo}
        handleEducation={handleEducation}
        handleExperience={handleExperience}
        clearPersonalInfo={clearPersonalInfo}
        clearEducation={clearEducation}
        clearExperience={clearExperience}
      />
      <Preview>
        <PersonalInfo {...personalInfo} />
        <EducationInfo education={education} />
        <ExperienceInfo experience={experience} />
      </Preview>
    </>
  )
}

export default App;
