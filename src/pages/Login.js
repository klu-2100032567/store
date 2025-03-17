import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState(''); // ✅ State for success message
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Login successful! Redirecting...');
        setTimeout(() => navigate('/dashboard'), 2000); // ✅ Redirect after delay
      } else {
        setMessage('Login failed! Check your credentials.');
      }
    } catch (error) {
      setMessage('Error occurred during login.');
    }
  };

  return (
    <div className='container'>
      <h2 className='title'>Login</h2>
      <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} className='input' required />
      <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} className='input' required />
      <button onClick={handleLogin} className='button'>Login</button>
      {message && <p className='message'>{message}</p>} {/* ✅ Display success message */}
    </div>
  );
}
