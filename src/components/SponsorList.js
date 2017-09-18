import React, { Component } from 'react'
import sematable, { Table } from 'sematable'
import { Link } from 'react-router-dom'
import moment from 'moment'
import './SponsorList.css'
import placeholderImage from '../logo.png'

const SponsorImage = ({ row }) =>
  <span>
    <img src={row.company_logo || placeholderImage} alt="Sponsor company logo" />
  </span>

const Sponsor = ({ row }) =>
  <Link to={`/sponsors/${row.id}`}>
    {row.company_name}
  </Link>

// TEMPORARY DUMB COMPONENTS
// THESE WILL CHANGE ONCE THE CAMPAIGNS AND PROSPECTS ARE IMPLEMENTED

const Campaign = ({ row }) =>
  <span>
    {row.campaigns || 0}
  </span>

const Prospect = ({ row }) =>
  <span>
    <p>
      {row.prospects || 0}
    </p>
    <footer>Prospects</footer>
  </span>

// END OF TEMPORARY COMPONENTS

const CreatedAt = ({ row }) =>
  <span>
    {moment(new Date(row.created_at)).format('MMM DD, YYYY')}
  </span>

const columns = [
  {
    key: 'id',
    header: '',
    hidden: true,
    primaryKey: true,
  },
  {
    key: 'company_logo',
    header: '',
    sortable: false,
    searchable: false,
    Component: SponsorImage,
  },
  {
    key: 'company_name',
    header: 'Sponsor',
    sortable: true,
    Component: Sponsor,
  },
  {
    key: 'company_contact',
    header: 'Contact Name',
    sortable: false,
  },
  {
    key: 'campaigns',
    header: 'Campaigns',
    sortable: false,
    className: 'campaigns',
    Component: Campaign,
  },
  {
    key: 'prospects',
    header: 'Prospects Delivered',
    sortable: false,
    className: 'prospects',
    Component: Prospect,
  },
  {
    key: 'created_at',
    header: 'Created',
    sortable: false,
    Component: CreatedAt,
  },
]

class SponsorTable extends Component {
  render() {
    return <Table {...this.props} columns={columns} />
  }
}

export default sematable('sponsorTable', SponsorTable, columns, {
  autoHidePagination: false,
  showFilter: false,
  showPageSize: false,
  defaultPageSize: 15,
})
