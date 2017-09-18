import { gql } from 'react-apollo'

export const fetchSponsorList = gql`
  {
    sponsors {
      id
      company_logo
      company_name
      company_contact
      created_at
    }
  }
`
export const fetchSponsor = gql`
  query FetchSponsor($id: UUID) {
    sponsor(id: $id) {
      id
      company_name
      company_description
      company_logo
      company_website
      company_contact
      company_contact_email
      company_contact_phone
      thank_you_description
      thank_you_image
      thank_you_video_url
      destination_url
      created_at
      updated_at
    }
  }
`
