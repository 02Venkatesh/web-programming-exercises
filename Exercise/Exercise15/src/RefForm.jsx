import React, { useRef, useState } from 'react';
const RefForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    setSubmittedData({ name, email });
  };
  return (
    <div>
      <h3>Form using useRef</h3>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder="Name" /><br /><br />
        <input ref={emailRef} placeholder="Email" /><br /><br />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <p><strong>Submitted Values:</strong></p>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};
export default RefForm;
