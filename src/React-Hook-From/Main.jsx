import React from "react";
import BasicForm from "./BasicForm";
import FormEvent from "./FormEvent";
import FormValidation from "./FormValidation";

const Main = () => {
  return (
    <div className="content">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Basic-React-Hook-Form
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Validation-React-Hook-Form
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="new-tab"
            data-bs-toggle="tab"
            data-bs-target="#new-tab-pane"
            type="button"
            role="tab"
            aria-controls="new-tab-pane"
            aria-selected="false"
          >
            React-Hook-FormEvent
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <BasicForm />
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <FormValidation />
        </div>

        <div
          className="tab-pane fade"
          id="new-tab-pane"
          role="tabpanel"
          aria-labelledby="new-tab"
          tabIndex="0"
        >
          <FormEvent />
        </div>
      </div>
    </div>
  );
};

export default Main;
