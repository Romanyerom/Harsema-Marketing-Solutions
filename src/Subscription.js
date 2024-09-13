import React, { useState } from 'react';

function Subscription() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}`);
  };

  return (
    <div>
      <h1>Subscribe to Our Newsletter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Subscription;

