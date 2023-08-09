import React, { useState } from 'react';
import Authenticate from './Authenticate';
import SignUpForm from './SignUpForm';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
