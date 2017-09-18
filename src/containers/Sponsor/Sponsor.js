import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import ReactLoading from 'react-loading'
import NewSponsor from './NewSponsor'
import SponsorList from '../../components/SponsorList'
import './Sponsor.css'
import { fetchSponsorList } from './queries'

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 auto',
  },
}

class Sponsor extends Component {
  render() {
    const { loading, sponsors } = this.props

    if (loading) {
      return (
        <div className="loading-wrapper">
          <ReactLoading type="spokes" color="#444" />
        </div>
      )
    }

    return (
      <div>
        <section style={styles.header}>
          <div>
            <h2 style={{ display: 'inline' }}>Sponsors</h2>
            <h4 style={{ display: 'inline', marginLeft: '50px' }}>
              {sponsors.length} sponsors
            </h4>
          </div>
          <NewSponsor history={this.props.history} />
        </section>
        <section style={{ marginTop: '20px' }}>
          <SponsorList data={sponsors} />
        </section>
      </div>
    )
  }
}

const SponsorWithData = graphql(fetchSponsorList, {
  props: ({ data: { loading, sponsors } }) => {
    if (!sponsors) {
      return { loading, sponsors: [] }
    }

    return { loading, sponsors }
  },
})(Sponsor)

export default connect(null)(SponsorWithData)
