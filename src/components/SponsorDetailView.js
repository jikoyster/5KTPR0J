import React from 'react'

const imgUrl = 'http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png'

const SponsorDetailView = ({
  company_contact,
  company_contact_phone,
  company_contact_email,
  company_name,
  company_description,
  company_website,
  thank_you_description,
  thank_you_image,
  destination_url,
  isEditing,
  toggleDetailsEdit,
}) =>
  <section className="sponsor-view-details">
    <h3 style={{ marginRight: '50px' }} className="sponsor-view-section-headers">
      Sponsor Details
    </h3>
    <button onClick={() => toggleDetailsEdit(isEditing)} className="sponsor-btn">
      EDIT
    </button>
    <section className="sponsor-view-detail-view">
      <section>
        <h4>Contact Name</h4>
        <p>
          {company_contact}
        </p>
        <h4>Contact Phone</h4>
        <p>
          {company_contact_phone}
        </p>
        <h4>Contact Email</h4>
        <p>
          <a target="_blank" href={`mailto:${company_contact_email}`}>
            {company_contact_email}
          </a>
        </p>
        <h4>Company Name</h4>
        <p>
          {company_name}
        </p>
        <h4>Company Description</h4>
        <p>
          {company_description}
        </p>
        <h4>Website URL</h4>
        <p>
          <a target="_blank" href={company_website}>
            {company_website}
          </a>
        </p>
      </section>
      <section>
        <h4>Thank You Page Description</h4>
        <p>
          {thank_you_description}
        </p>
        <h4>Destination URL</h4>
        <p>
          <a target="_blank" href={destination_url}>
            {destination_url}
          </a>
        </p>
        <h4>Thank You Page Image</h4>
        <section className="sponsor-view-thank-you-image">
          <img src={thank_you_image || imgUrl} alt="thank you page logo" />
          <a href="http://aktify.com">Add Image</a>
        </section>
      </section>
    </section>
  </section>

export default SponsorDetailView
