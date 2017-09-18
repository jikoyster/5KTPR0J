import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { graphql } from 'react-apollo'

import SponsorDetailView from '../../components/SponsorDetailView'
import SponsorDetailForm from '../../components/SponsorDetailForm'

import { fetchSponsor } from './queries'
import { updateSponsor } from './mutations'

import './SponsorDetails.css'

class SponsorDetails extends Component {
  handleButtonClick() {
    this.props.toggleDetailsEdit(this.props.isEditing)
  }

  handleFormSubmit({
    company_contact,
    company_contact_phone,
    company_contact_email,
    company_name,
    company_description,
    company_website,
    thank_you_description,
    thank_you_image,
    destination_url,
  }) {
    this.props
      .mutate({
        variables: {
          id: this.props.sponsor.id,
          company_logo: '',
          company_contact,
          company_contact_phone,
          company_contact_email,
          company_name,
          company_description,
          company_website,
          thank_you_description,
          thank_you_image,
          destination_url,
        },
        refetchQueries: [{ query: fetchSponsor, variables: { id: this.props.sponsor.id } }],
      })
      .then(() => {
        this.props.toggleDetailsEdit(this.props.isEditing)
      })
  }

  render() {
    const { sponsor, isEditing, toggleDetailsEdit, handleSubmit } = this.props

    if (isEditing) {
      return (
        <SponsorDetailForm
          handleSubmit={handleSubmit}
          handleFormSubmit={this.handleFormSubmit.bind(this)}
          Field={Field}
          isEditing={isEditing}
          toggleDetailsEdit={toggleDetailsEdit}
          thank_you_image={sponsor.thank_you_image}
        />
      )
    }

    return (
      <SponsorDetailView isEditing={isEditing} toggleDetailsEdit={toggleDetailsEdit} {...sponsor} />
    )
  }
}

const SponsorDetailsWithMutate = graphql(updateSponsor)(SponsorDetails)

const mapStateToProps = (state, { sponsor }) => ({
  initialValues: sponsor,
})

export default connect(mapStateToProps)(
  reduxForm({ form: 'sponsorDetails' })(SponsorDetailsWithMutate)
)
