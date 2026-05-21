import { useState } from 'react';
import './UserCard.css';

function UserCard() {
  const [user, setUser] = useState({
    name: 'Divanshu Sharma',
    age: 20,
    college: 'NIT Bhopal',
    role: 'Full-Stack Developer'
  });

  const [editing, setEditing] = useState(false);
  const [tempUser, setTempUser] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUser({ ...tempUser, [name]: value });
  };

  const saveChanges = () => {
    setUser(tempUser);
    setEditing(false);
  };

  const cancelEdit = () => {
    setTempUser(user);
    setEditing(false);
  };

  return (
    <div className="user-card">
      <h2>User Profile</h2>

      {!editing ? (
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>College:</strong> {user.college}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <button onClick={() => setEditing(true)} className="btn btn-primary">
            Edit Profile
          </button>
        </div>
      ) : (
        <div className="edit-form">
          <input
            type="text"
            name="name"
            value={tempUser.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            value={tempUser.age}
            onChange={handleInputChange}
            placeholder="Age"
          />
          <input
            type="text"
            name="college"
            value={tempUser.college}
            onChange={handleInputChange}
            placeholder="College"
          />
          <input
            type="text"
            name="role"
            value={tempUser.role}
            onChange={handleInputChange}
            placeholder="Role"
          />
          <div className="button-group">
            <button onClick={saveChanges} className="btn btn-success">
              Save
            </button>
            <button onClick={cancelEdit} className="btn btn-danger">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCard;