const UserProfile = (props) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      maxWidth: '250px',
      borderRadius: '8px',
      margin: '10px auto',
      textAlign: 'center'
    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
