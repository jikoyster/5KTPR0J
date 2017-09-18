import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import ReactLoading from 'react-loading'
import './SponsorView.css'

import CampaignSponsor from '../../components/CampaignSponsor'
import CustomQuestions from './CustomQuestions'
import SponsorDetails from './SponsorDetails'
import DeleteSponsor from './DeleteSponsor'

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import { fetchSponsor } from './queries'

import * as actions from './actions'

class SponsorView extends Component {
  constructor(props){
    super(props);
    this.state = {file: '', imagePreviewUrl: ''}
  }

  //image upload event
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }
  //end: _handleSubmit()

  //handle logo preview
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  //end: _handleImageChange()

  render() {
   let {imagePreviewUrl} = this.state;
   let $imagePreview = null;
   if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
   } else {
      $imagePreview = (<img 
         src='http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' />);
   }


    const { data, isEditing, toggleDetailsEdit, isDeleting, toggleDelete } = this.props

    if (data.loading) {
      return (
        <div className="loading-wrapper">
          <ReactLoading type="spokes" color="#444" />
        </div>
      )
    }

    const { sponsor } = data

    if (sponsor) {
      return (
        <section>
          <h2>
            {sponsor.company_name}
          </h2>
          <section className="sponsor-view-profile">
            <div className="sponsor-view-contact-details">
              <div className="sponsor-view-contact-image">

                  <div className="sponsor-view-company-img imgPreview">
                     {$imagePreview}
                  </div>

                  <ImagesUploader
                url="file://home/testupload/"
                optimisticPreviews
                multiple={false}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error("sayop na: "+err);
                    }
                }}
                label="Upload logo"
                />
                

                <div>
                  <form >
                    <label for="company_logo_upload" id="lbl-logoupload">
                        Replace Logo
                        <input type="file" id="company_logo_upload" name="company_logo" 
                           accept="image/gif, image/jpeg, image/png"
                           onChange={(e)=>this._handleImageChange(e)}
                         />
                    </label>
                    <button type="submit" 
                           onClick={(e)=>this._handleSubmit(e)}>Save Image</button>
                  </form>

                </div> 
              </div>

              <span>
                <span className="sponsor-view-contact-name">
                  {sponsor.company_contact}
                </span>
                <br />
                {sponsor.company_contact_phone}
                <br />
                {sponsor.company_contact_email}
              </span>
            </div>

            <div className="sponsor-view-overview">
              <h3 className="sponsor-view-section-headers">Overview</h3>
              <section>
                <p>No Activity Recorded</p>
              </section>
            </div>
          </section>

          <CampaignSponsor />
          <SponsorDetails
            toggleDetailsEdit={toggleDetailsEdit}
            isEditing={isEditing}
            sponsor={sponsor}
          />
          <CustomQuestions />
          <DeleteSponsor
            history={this.props.history}
            sponsorId={sponsor.id}
            toggleDelete={toggleDelete}
            isDeleting={isDeleting}
          />
        </section>
      )
    }

    return <h1>ooops, something went wrong :(</h1>
  }
}

const SponsorViewWithData = graphql(fetchSponsor, {
  options: ({ match: { params: { sponsorId } } }) => ({ variables: { id: sponsorId } }),
})(SponsorView)

const mapStateToProps = ({ sponsor }) => ({
  isEditing: sponsor.isEditing,
  isDeleting: sponsor.isDeleting,
})

export default connect(mapStateToProps, actions)(SponsorViewWithData)
