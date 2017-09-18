import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from './actions'
import CustomQuestionsView from '../../components/CustomQuestionsView'

import './CustomQuestions.css'

class CustomQuestions extends Component {
  render() {
    const { isEditing, toggleQuestionsEdit } = this.props

    if (isEditing) {
      return (
        <div>
          <h1>WIP: Edit/Add Mode</h1>
          <button onClick={() => toggleQuestionsEdit(isEditing)}>Back</button>
        </div>
      )
    }

    return <CustomQuestionsView handleEdit={toggleQuestionsEdit.bind(this)} isEditing={isEditing} />
  }
}

const mapStateToProps = ({ sponsor }) => ({ isEditing: sponsor.isEditingQuestions })

export default connect(mapStateToProps, actions)(CustomQuestions)
