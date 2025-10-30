function PersonalInfo(props) {
  return (
    <div className='personal-info'>
      <h1>{props.fullName}</h1>
      <div className="info">
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.address}</p>
      </div>
    </div>
  )
}

export default PersonalInfo;
