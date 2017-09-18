const validate = (values) => {
  const errors = {}

  if (!values.companyName) {
    errors.companyName = 'Company Name is required.'
  }

  if (!values.companyContact) {
    errors.companyContact = 'Contact Name is required'
  }

  if (!/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/.test(values.companyContactPhone)) {
    errors.companyContactPhone = 'Please enter a valid phone number.'
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.companyContactEmail)) {
    errors.companyContactEmail = 'Please enter a valid email address'
  }

  return errors
}

export default validate
