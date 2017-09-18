import React from 'react'

const RenderField = ({ input, label, placeholder, type, meta: { touched, error } }) =>
  <fieldset className="form-group">
    <label>
      {label}
    </label>
    <input {...input} placeholder={placeholder} type={type} className="form-control" />
    {touched &&
      error &&
      <span className="render-form-error-message">
        {error}
      </span>}
  </fieldset>

export default RenderField
