import React, { useState } from 'react';

function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const registration = {
      firstname,
      lastname,
      email,
      dob,
      phonenumber,
      username,
      password,
    };

    fetch('http://localhost:8000/registrations/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registration),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setFirstname('');
        setLastname('');
        setEmail('');
        setDob('');
        setPhonenumber('');
        setUsername('');
        setPassword('');
      })
      .catch(error => console.error('Error:', error));
  };
}

  return (
    <div>
      <h1>Add Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Registration</button>
      </form>
    </div>
  );


export default Register;




return (
  <div>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone Number</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
      </div>
      <button type="submit">Register</button>
    </form>
    {message && <p>{message}</p>}
  </div>
);