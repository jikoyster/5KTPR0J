import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { reduxForm, Field } from 'redux-form'
import { Modal } from 'react-bootstrap'
import uuid from 'uuid'
import * as actions from './actions'
import RenderField from '../../components/RenderField'
import { fetchSponsorList } from './queries'
import { addNewSponsor } from './mutations'
import validate from './validate'
import './NewSponsor.css'

class NewSponsor extends Component {
  constructor(props) {
    super(props)
    this.state = { addDisabled: false }
  }

  handleFormSubmit({ companyName, companyContact, companyContactPhone, companyContactEmail }) {
    this.setState({ addDisabled: true })
    const id = uuid.v4()
    const companyLogo = ''

    this.props
      .mutate({
        variables: {
          id,
          companyName,
          companyLogo,
          companyContact,
          companyContactPhone,
          companyContactEmail,
        },
        refetchQueries: [{ query: fetchSponsorList }],
      })
      .then(({ data: { createSponsor } }) => {
        this.props.reset()
        this.props.toggleModal(this.props.showModal)
        this.setState({ addDisabled: false })
        this.props.history.push(`/sponsors/${createSponsor.id}`)
      })
  }

  render() {
    const { handleSubmit, showModal, toggleModal } = this.props

    return (
      <div className="new-sponsor-wrapper">
        <button className="sponsor-btn sponsor-btn-new" onClick={() => toggleModal(showModal)}>
          NEW SPONSOR
        </button>
        <Modal show={this.props.showModal} onHide={() => toggleModal(showModal)}>
          <Modal.Header closeButton>
            <h3>New Sponsor</h3>
          </Modal.Header>
          <Modal.Body bsClass="modal-body clearfix">
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <Field
                label="Company Name"
                placeholder="Mazuma USA"
                name="companyName"
                type="text"
                className="form-control"
                component={RenderField}
              />

              <Field
                label="Contact Name"
                placeholder="Carl Carlson"
                name="companyContact"
                type="text"
                className="form-control"
                component={RenderField}
              />

              <Field
                label="Contact phone"
                placeholder="801-698-2631"
                name="companyContactPhone"
                type="text"
                className="form-control"
                component={RenderField}
              />

              <Field
                label="Contact Email"
                placeholder="carl@mazuma.com"
                name="companyContactEmail"
                type="text"
                className="form-control"
                component={RenderField}
              />

              <div className="pull-left">
                <button
                  type="submit"
                  disabled={this.state.addDisabled}
                  className="sponsor-btn sponsor-btn-submit"
                >
                  SAVE
                </button>
                <button
                  type="button"
                  onClick={() => toggleModal(showModal)}
                  className="sponsor-btn sponsor-btn-cancel"
                >
                  Cancel
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const NewSponsorWithMutate = graphql(addNewSponsor)(NewSponsor)

const mapStateToProps = ({ sponsor }) => ({
  showModal: sponsor.showModal,
})

export default connect(mapStateToProps, actions)(
  reduxForm({ form: 'newSponsor', validate })(NewSponsorWithMutate)
)
