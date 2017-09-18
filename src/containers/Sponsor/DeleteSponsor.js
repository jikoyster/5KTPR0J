import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { graphql } from 'react-apollo'
import { fetchSponsorList } from './queries'
import { deleteSponsor } from './mutations'

class DeleteSponsor extends Component {
  deleteSponsorHandler(sponsorId) {
    this.props
      .mutate({
        variables: {
          id: sponsorId,
        },
        refetchQueries: [{ query: fetchSponsorList }],
      })
      .then(() => {
        this.props.toggleDelete(this.props.isDeleting)
        this.props.history.goBack()
      })
  }

  render() {
    const { isDeleting, toggleDelete, sponsorId } = this.props
    return (
      <div className="sponsor-view-delete-wrapper">
        <a className="sponsor-view-delete-link" onClick={() => toggleDelete(isDeleting)}>
          Delete Sponsor
        </a>
        <Modal show={isDeleting} onHide={() => toggleDelete(isDeleting)}>
          <Modal.Header>
            <h3>Delete this sponsor?</h3>
          </Modal.Header>
          <Modal.Body>
            <section style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button
                onClick={() => this.deleteSponsorHandler(sponsorId)}
                className="sponsor-btn sponsor-btn-submit"
              >
                Yes
              </button>
              <button
                onClick={() => toggleDelete(isDeleting)}
                className="sponsor-btn sponsor-btn-cancel"
              >
                Cancel
              </button>
            </section>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const DeleteSponsorWithMutate = graphql(deleteSponsor)(DeleteSponsor)

export default DeleteSponsorWithMutate
