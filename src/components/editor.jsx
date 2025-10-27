import '../styles/editor.css';

function Editor() {
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

        <button type='submit'>Save</button>
      </section>
    </aside>
  )
}

export default Editor;
