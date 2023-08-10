import React, { useState } from 'react';

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null); // Add a state for user data

  async function handleClick() {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      setSuccessMessage(result.message);
      setUserData(result.data); // Set the user data
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      {userData && <p>Welcome, {userData.username}!</p>} {/* Display the username */}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
} 
