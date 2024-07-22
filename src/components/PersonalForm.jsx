import { useState } from "react";

//Form to collect properties of Personal object
function PersonalForm({ personal, handlePersonalChange, onSubmitPersonal }) {
  const [viewPersonalForm, setViewPersonalForm] = useState(false);
  const togglePersonalForm = () => {
    setViewPersonalForm(!viewPersonalForm);
  };
  return (
    <div className="personalFormDiv">
      <div className="formHeader personalHeader">
        <h2>Add Personal Info:</h2>
        <button onClick={togglePersonalForm}>
          {viewPersonalForm ? "Hide" : "Show"}
        </button>
      </div>
      {viewPersonalForm && (
        <form
          className="formGroup"
          id="personalForm"
          onSubmit={onSubmitPersonal}
        >
          <label htmlFor="usernameInput">
            Name:
            <input
              type="text"
              name="username"
              id="usernameInput"
              maxLength="30"
              required
              value={personal.username}
              onChange={handlePersonalChange}
            />
          </label>
          <label htmlFor="phoneInput">
            Phone:
            <input
              type="tel"
              name="phone"
              id="phoneInput"
              maxLength="30"
              required
              value={personal.phone}
              onChange={handlePersonalChange}
            />
          </label>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              name="email"
              id="emailInput"
              maxLength="30"
              required
              value={personal.email}
              onChange={handlePersonalChange}
            />
          </label>
          <label htmlFor="websiteInput">
            Website:
            <input
              type="text"
              name="website"
              id="websiteInput"
              placeholder="Portfolio, LinkedIn, Blog, etc."
              required
              value={personal.website}
              onChange={handlePersonalChange}
            />
          </label>
          <button className="formButton" type="submit">
            Update
          </button>
        </form>
      )}
    </div>
  );
}

export default PersonalForm;
