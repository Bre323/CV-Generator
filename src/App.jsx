import { useState } from 'react'
import Editor from './components/editor'
import Preview from './components/preview'
import './App.css'

function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const handlePersonalInfo = () => {
    let fullNameValue = document.querySelector('#name').value;
    let emailValue = document.querySelector('#email').value;
    let phoneValue = document.querySelector('#phone').value;
    let addressValue = document.querySelector('#address').value;

    setFullName(fullNameValue);
    setEmail(emailValue);
    setPhone(phoneValue);
    setAddress(addressValue);
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
        city,
        country,
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
        description,
        period: `${jobStartDate} to ${jobEndDate}`,
      },
    ]);
  }

  return (
    <>
      <Editor 
        handlePersonalInfo={handlePersonalInfo}
        handleEducation={handleEducation}
        handleExperience={handleExperience}
      />
      <Preview />
    </>
  )
}

export default App
