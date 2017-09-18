import React from 'react'

const imgUrl = 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png'

const simpleField = ({ input, placeholder, type, meta: { touched, error } }) =>
  <p>
    <input {...input} placeholder={placeholder} type={type} className="form-control" />
    {touched &&
      error &&
      <span className="render-form-error-message">
        {error}
      </span>}
  </p>

const SponsorDetailForm = ({
  Field,
  thank_you_image,
  isEditing,
  toggleDetailsEdit,
  handleSubmit,
  handleFormSubmit,
}) =>
  <section className="sponsor-view-details">
    <h3 style={{ marginRight: '50px' }} className="sponsor-view-section-headers">
      Sponsor Details
    </h3>
    <form onSubmit={handleSubmit(handleFormSubmit.bind(this))}>
      <section className="sponsor-view-detail-view">
        <section>
          <h4>Contact Name</h4>
          <Field
            name="company_contact"
            type="text"
            className="form-control"
            component={simpleField}
          />

          <h4>Contact Phone</h4>
          <Field
            name="company_contact_phone"
            type="text"
            className="form-control"
            component={simpleField}
          />

          <h4>Contact Email</h4>
          <Field
            name="company_contact_email"
            type="text"
            className="form-control"
            component={simpleField}
          />

          <h4>Company Name</h4>
          <Field name="company_name" type="text" className="form-control" component={simpleField} />

          <h4>Company Description</h4>
          <Field
            name="company_description"
            type="text"
            className="form-control"
            component={simpleField}
          />

          <h4>Website URL</h4>
          <Field
            name="company_website"
            type="text"
            className="form-control"
            component={simpleField}
          />
        </section>
        <section>
          <h4>Thank You Page Description</h4>
          <Field
            name="thank_you_description"
            type="text"
            className="form-control"
            component={simpleField}
          />
          <h4>Destination URL</h4>
          <Field
            name="destination_url"
            type="text"
            className="form-control"
            component={simpleField}
          />

          <h4>Thank You Page Image</h4>
          <section className="sponsor-view-thank-you-image">
            <img src={thank_you_image || imgUrl} alt="thank you page logo" />
          </section>
          <div className="sponsor-view-button-wrapper">
            <button className="sponsor-btn sponsor-btn-submit" type="submit">
              SAVE
            </button>
            <button
              className="sponsor-btn sponsor-btn-cancel"
              type="button"
              onClick={() => toggleDetailsEdit(isEditing)}
            >
              Cancel
            </button>
          </div>
        </section>
      </section>
    </form>
  </section>

export default SponsorDetailForm
