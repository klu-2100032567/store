import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: ''
  });
  const [message, setMessage] = useState(''); // ✅ State for success message
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3001/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      
      if (response.ok) {
        setMessage(data.message); // ✅ Show success message
        setTimeout(() => navigate('/login'), 2000); // ✅ Redirect after delay
      } else {
        setMessage('Signup failed! Try again.');
      }
    } catch (error) {
      setMessage('Error occurred during signup.');
    }
  };

  return (
    <div className='container'>
      <h2 className='title'>Signup</h2>
      <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} className='input' required />
      <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} className='input' required />
      <input type='text' name='address' placeholder='Address' value={formData.address} onChange={handleChange} className='input' required />
      <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} className='input' required />
      <button onClick={handleSignup} className='button'>Signup</button>
      {message && <p className='message'>{message}</p>} {/* ✅ Display success message */}
    </div>
  );
}