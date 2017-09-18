import { gql } from 'react-apollo'

export const addNewSponsor = gql`
  mutation AddNewSponsor(
    $id: UUID!
    $companyLogo: String!
    $companyName: String!
    $companyContact: String
    $companyContactEmail: String
    $companyContactPhone: String
  ) {
    createSponsor(
      input: {
        id: $id
        company_name: $companyName
        company_logo: $companyLogo
        company_description: $companyName
        company_contact: $companyContact
        company_contact_email: $companyContactEmail
        company_contact_phone: $companyContactPhone
      }
    ) {
      id
    }
  }
`
export const updateSponsor = gql`
  mutation UpdateSponsor(
    $id: UUID!
    $company_name: String!
    $company_description: String!
    $company_logo: String!
    $company_website: String
    $company_contact: String
    $company_contact_email: String
    $company_contact_phone: String
    $thank_you_description: String
    $thank_you_image: String
    $thank_you_video_url: String
    $destination_url: String
  ) {
    updateSponsor(
      input: {
        id: $id
        company_name: $company_name
        company_description: $company_description
        company_logo: $company_logo
        company_website: $company_website
        company_contact: $company_contact
        company_contact_email: $company_contact_email
        company_contact_phone: $company_contact_phone
        thank_you_description: $thank_you_description
        thank_you_image: $thank_you_image
        thank_you_video_url: $thank_you_video_url
        destination_url: $destination_url
      }
    ) {
      company_name
    }
  }
`
export const deleteSponsor = gql`
  mutation DeleteSponsor($id: UUID) {
    deleteSponsor(id: $id)
  }
`
