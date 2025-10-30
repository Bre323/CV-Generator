import '../styles/editor.css';

function Editor({ 
  handlePersonalInfo, handleEducation, handleExperience, 
  clearPersonalInfo, clearEducation, clearExperience 
}) {
  return (
    <aside>
      <h1>CV Generator</h1>

      <section className="header-info">
        <h2>Personal Info</h2>

        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input type="text" name='name' id='name' />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input type="number" name='phone' id='phone' />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" name='address' id='address' />
        </div>

        <div className="buttons">
          <button type='submit' onClick={handlePersonalInfo}>Save</button>
          <button onClick={clearPersonalInfo}>Clear</button>
        </div>
      </section>

      <section className="header-info">
        <h2>Education</h2>

        <div className="form-group">
          <label htmlFor="school">School</label>
          <input type="text" name='school' id='school' />
        </div>

        <div className="form-group">
          <label htmlFor="school">Degree</label>
          <input type="text" name='degree' id='degree' />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" name='city' id='city' />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" name='country' id='country' />
        </div>

        <div className="form-group">
          <div className="start-date">
            <label htmlFor="start-date">Start Date</label>
            <input type="date" name='start-date' id='start-date' />
          </div>

          <div className="end-date">
            <label htmlFor="end-date">End Date</label>
            <input type="date" name="end-date" id="end-date" />
          </div>
        </div>

        <div className="buttons">
          <button type='submit' onClick={handleEducation}>Add</button>
          <button onClick={clearEducation}>Clear Entries</button>
        </div>
      </section>

      <section className="header-info">
        <h2>Professional Experience</h2>

        <div className="form-group">
          <label htmlFor="job-title">Job Title</label>
          <input type="text" name="job-title" id="job-title" />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description"></textarea>
        </div>

        <div className="form-group">
          <div className="start-date">
            <label htmlFor="start-date">Start Date</label>
            <input type="date" name='job-start-date' id='job-start-date' />
          </div>

          <div className="end-date">
            <label htmlFor="end-date">End Date</label>
            <input type="date" name="job-end-date" id="job-end-date" />
          </div>
        </div>

        <div className="buttons">
          <button type='submit' onClick={handleExperience}>Add</button>
          <button onClick={clearExperience}>Clear Entries</button>
        </div>
      </section>
    </aside>
  )
}

export default Editor;
