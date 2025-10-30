function EducationInfo({ education }) {
  if (education.length > 0) {
    return (
      <div className="education-info">
        <h2>Education</h2> 
        <ul>
          {
            education.map((item, index) => {
              return (
                <li className='education-item' key={`${index}`}>
                  <h3>{item.school}</h3>
                  <p>{item.degree}</p>
                  <p>{item.location}</p>
                  <p>{item.period}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default EducationInfo;
