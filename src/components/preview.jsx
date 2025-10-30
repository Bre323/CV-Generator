import '../styles/preview.css';
import PersonalInfo from './personalInfo';

function Preview(props) {
  return (
    <main>
      <div className='curriculum'>
        <PersonalInfo {...props} />
        {/*
        <div className='personal-info'>
          <h1>Breno Pena Rocha</h1>
          <div className="info">
            <p>Email: brenopenarocha2@gmail.com</p>
            <p>Phone: 988104449</p>
            <p>Address: Rua Pastor Pastor, 233</p>
          </div>
        </div>

        <div className="education-info">
          <h2>Education</h2>
          <ul>
            <li className='education-item'>
              <h3>School of schools</h3>
              <p>Bachelor</p>
              <p>Belem, Brazil</p>
              <p>20-10-2025 to 20-10-2025</p>
            </li>

            <li className='education-item'>
              <h3>School of schools</h3>
              <p>Bachelor</p>
              <p>Belem, Brazil</p>
              <p>20-10-2025 to 20-10-2025</p>
            </li>
          </ul>
        </div>

        <div className="experience-info">
          <h2>Professional Experience</h2>
          <ul>
            <li className='experience-item'>
              <h3>School of schools</h3>
              <p>Software Engineer</p>
              <p>20-10-2025 to 20-10-2025</p>
              <p>
                ofsnagopnspbnorbnwoiarwnbaoeineobenberoibnornbroinonboi
                eRNBAPIORNBIONOIERNOINOINonoiwbnoieprbnopibenpoernsbopin
                aeorinbpoeirbnoirnbopbnerobnoinorinboirnboinboiernbooirba
              </p>
            </li>

            <li className='experience-item'>
              <h3>X</h3>
              <p>Ruby on Rails Engineer</p>
              <p>20-10-2025 to 20-10-2025</p>
              <p>
                ofsnagopnspbnorbnwoiarwnbaoeineobenberoibnornbroinonboi
                eRNBAPIORNBIONOIERNOINOINonoiwbnoieprbnopibenpoernsbopin
                aeorinbpoeirbnoirnbopbnerobnoinorinboirnboinboiernbooirba
              </p>
            </li>
          </ul>
        </div>
        */}
      </div>
    </main>
  )
}

export default Preview;
