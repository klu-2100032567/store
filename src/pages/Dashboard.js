
// Improved Home Page with Modern UI Design
import { useEffect, useState } from 'react';
import '../styles.css';
import dashboardImage from '../assets/app2.jpg';

function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, stores: 0, ratings: 0 });
  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);
  const [filters, setFilters] = useState({ name: '', email: '', address: '', role: '' });
  const [storeFilters, setStoreFilters] = useState({ name: '', email: '', address: '' });

  useEffect(() => {
    fetch('http://localhost:3001/admin/stats')
      .then(response => response.json())
      .then(data => setStats(data))
      .catch(error => console.error('Error fetching stats:', error));

    fetch('http://localhost:3001/admin/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));

    fetch('http://localhost:3001/admin/stores')
      .then(response => response.json())
      .then(data => setStores(data))
      .catch(error => console.error('Error fetching stores:', error));
  }, []);

  return (
    <div className='dashboard-container'>
      <header className='dashboard-header'>
        <h1>Admin Dashboard</h1>
      </header>
      <img src={dashboardImage} alt='Dashboard Overview' className='dashboard-image' />
      <div className='dashboard-content'>
        <div className='dashboard-card'>
          <h2>Total Users</h2>
          <p>{stats.users}</p>
        </div>
        <div className='dashboard-card'>
          <h2>Total Stores</h2>
          <p>{stats.stores}</p>
        </div>
        <div className='dashboard-card'>
          <h2>Total Ratings</h2>
          <p>{stats.ratings}</p>
        </div>
      </div>
      <div className='list-section'>
        <h2>Users List</h2>
        <input type='text' placeholder='Filter by name' onChange={e => setFilters({ ...filters, name: e.target.value })} />
        <input type='text' placeholder='Filter by email' onChange={e => setFilters({ ...filters, email: e.target.value })} />
        <input type='text' placeholder='Filter by address' onChange={e => setFilters({ ...filters, address: e.target.value })} />
        <input type='text' placeholder='Filter by role' onChange={e => setFilters({ ...filters, role: e.target.value })} />
        <ul>
          {users.filter(user =>
            user.name.includes(filters.name) &&
            user.email.includes(filters.email) &&
            user.address.includes(filters.address) &&
            user.role.includes(filters.role)
          ).map(user => (
            <li key={user.id}>{user.name} - {user.email} - {user.address} - {user.role}</li>
          ))}
        </ul>
      </div>
      <div className='list-section'>
        <h2>Stores List</h2>
        <input type='text' placeholder='Filter by name' onChange={e => setStoreFilters({ ...storeFilters, name: e.target.value })} />
        <input type='text' placeholder='Filter by email' onChange={e => setStoreFilters({ ...storeFilters, email: e.target.value })} />
        <input type='text' placeholder='Filter by address' onChange={e => setStoreFilters({ ...storeFilters, address: e.target.value })} />
        <ul>
          {stores.filter(store =>
            store.name.includes(storeFilters.name) &&
            store.email.includes(storeFilters.email) &&
            store.address.includes(storeFilters.address)
          ).map(store => (
            <li key={store.id}>{store.name} - {store.email} - {store.address} - Rating: {store.rating}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
