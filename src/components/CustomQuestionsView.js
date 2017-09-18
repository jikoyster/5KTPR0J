import React from 'react'

const CustomQuestionsView = ({ handleEdit, isEditing }) =>
  <section className="sponsor-view-details">
    <h3 style={{ marginRight: '50px' }} className="sponsor-view-section-headers">
      Custom Questions
    </h3>
    <button
      onClick={() => {
        handleEdit(isEditing)
      }}
      className="sponsor-btn"
    >
      EDIT
    </button>
    <div className="table-responsive">
      <table className="table borderless">
        <thead>
          <tr>
            <th>Question Group</th>
            <th>Field Name</th>
            <th>Question</th>
            <th>Question Type</th>
            <th>Question Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Custom 1</td>
            <td>number_devices</td>
            <td>How many technology devices do you have in your home?</td>
            <td>Number</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Custom 2</td>
            <td>travel_city</td>
            <td>Which of the following cities are you planning to visit in the next 6 months?</td>
            <td>Dropdown</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td>Custom 3</td>
            <td>default_name1</td>
            <td>Enter your question here.</td>
            <td>Long Text</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

export default CustomQuestionsView
