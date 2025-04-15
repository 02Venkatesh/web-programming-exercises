import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    city: "",
    webServer: "",
    role: "",
    signOn: {
      mail: false,
      payroll: false,
      selfService: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        signOn: { ...formData.signOn, [name]: checked },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted!");
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Novell Services Login</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <label>City of Employment:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <label>Web Server:</label>
          <select
            name="webServer"
            value={formData.webServer}
            onChange={handleChange}
          >
            <option value="">-- Choose a server --</option>
            <option value="server1">Server 1</option>
            <option value="server2">Server 2</option>
          </select>
        </div>

        <fieldset>
          <legend>Please specify your role:</legend>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              margin: "1rem",
            }}
          >
            <label>
              <input
                type="radio"
                name="role"
                value="Admin"
                onChange={handleChange}
              />{" "}
              Admin
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="Engineer"
                onChange={handleChange}
              />{" "}
              Engineer
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="Manager"
                onChange={handleChange}
              />{" "}
              Manager
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="Guest"
                onChange={handleChange}
              />{" "}
              Guest
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Single Sign-on to the following:</legend>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              margin: "1rem",
            }}
          >
            <label>
              <input
                type="checkbox"
                name="mail"
                checked={formData.signOn.mail}
                onChange={handleChange}
              />{" "}
              Mail
            </label>
            <label>
              <input
                type="checkbox"
                name="payroll"
                checked={formData.signOn.payroll}
                onChange={handleChange}
              />{" "}
              Payroll
            </label>
            <label>
              <input
                type="checkbox"
                name="selfService"
                checked={formData.signOn.selfService}
                onChange={handleChange}
              />{" "}
              Self-service
            </label>
          </div>
        </fieldset>

        <div
          style={{
            textAlign: "center",
            display: "flex",
            gap: "1rem",
          }}
        >
          <button type="submit">Login</button>
          <button
            type="reset"
            onClick={() =>
              setFormData({
                username: "",
                password: "",
                city: "",
                webServer: "",
                role: "",
                signOn: { mail: false, payroll: false, selfService: false },
              })
            }
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
