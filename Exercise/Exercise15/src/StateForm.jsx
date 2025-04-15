import React, { useState } from 'react';
const StateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div>
      <h3>Form using useState</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        /><br /><br />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
      <p><strong>Live Preview:</strong></p>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default StateForm;
