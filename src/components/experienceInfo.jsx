function ExperienceInfo({ experience }) {
  if (experience.length > 0) {
    return (
      <div className="experience-info">
        <h2>Professional Experience</h2>
        <ul>
          {
            experience.map(item => {
              return (
                <li className='experience-item'>
                  <h3>{item.jobTitle}</h3>
                  <p>{item.company}</p>
                  <p>{item.period}</p>
                  <p>{item.description}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default ExperienceInfo;
