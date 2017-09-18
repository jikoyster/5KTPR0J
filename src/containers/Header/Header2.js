import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { toggleActive } from './actions'

import css from './Header2.css'

import logo from '../../logo.png'

class Header extends Component {
  handleSelect(eventKey) {
    this.props.toggleActive(eventKey)
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Aktify Logo" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <LinkContainer to="/campaigns">
                <NavItem eventKey={1}>Campaigns</NavItem>
              </LinkContainer>
              <LinkContainer to="/sponsors">
                <NavItem eventKey={2}>Sponsors</NavItem>
              </LinkContainer>
              <LinkContainer to="/events">
                <NavItem eventKey={3}>Events</NavItem>
              </LinkContainer>
              <LinkContainer to="/prospects">
                <NavItem eventKey={4}>Prospects</NavItem>
              </LinkContainer>
              <LinkContainer to="/reports">
                <NavItem eventKey={5}>Reports</NavItem>
              </LinkContainer>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <NavDropdown eventKey={6} title="Jeff" id="basic-nav-dropdown" pullRight>
                <MenuItem eventKey={6.1}>Lorem ipsum</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={6.2}>Log out</MenuItem>
              </NavDropdown>

              <LinkContainer to="/search">
                <MenuItem eventKey={7}><i className="glyphicon glyphicon-search"></i></MenuItem>
              </LinkContainer>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  selectedKey: state.header.selectedKey,
})

export default connect(mapStateToProps, { toggleActive })(Header)