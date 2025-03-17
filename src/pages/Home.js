// frontend/src/pages/Home.js
// Improved Home Page with Modern UI Design
import { Link } from 'react-router-dom';
import '../styles.css';
import homeImage from '../assets/app1.png';

function Home() {
  return (
    <div className='home-container'>
      <header className='home-header'>
        <div className='header-actions'>
          <Link to='/signup' className='header-button'>Sign Up</Link>
          <Link to='/login' className='header-button'>Login</Link>
        </div>
        <h1>Welcome to the Ratings App</h1>
        <p>Rate and review stores easily with our platform.</p>
      </header>

      <img src={homeImage} alt='Ratings App' className='home-image' />

      <div className='home-content'>
        <section className='home-info'>
          <h2>Why Choose Us?</h2>
          <p>Discover top-rated stores and share your experiences with the community.</p>
          <ul>
            <li>Find stores based on ratings and reviews</li>
            <li>Submit and update your ratings</li>
            <li>Admin dashboard for managing users and stores</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
