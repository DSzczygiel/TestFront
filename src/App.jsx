
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/persons`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setPersons(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [baseUrl]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app">
      <h1>Deply msg test</h1>
      <h1>Persons List</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>PESEL</th>
              <th>Gender</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (
              <tr key={person.id}>
                <td data-label="ID">{person.id}</td>
                <td data-label="First Name">{person.firstName}</td>
                <td data-label="Last Name">{person.lastName}</td>
                <td data-label="Email">{person.email}</td>
                <td data-label="Phone">{person.phoneNumber}</td>
                <td data-label="Address">{person.address}</td>
                <td data-label="PESEL">{person.pesel}</td>
                <td data-label="Gender">{person.gender}</td>
                <td data-label="Nationality">{person.nationality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App
