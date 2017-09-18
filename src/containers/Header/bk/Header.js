import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { toggleActive } from './actions'
import './Header.css'
import logo from '../../logo.png'

class Header extends Component {
  handleSelect(eventKey) {
    this.props.toggleActive(eventKey)
  }

  render() {
    return (
      <Navbar fluid onSelect={this.handleSelect.bind(this)}>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <a>
                <img src={logo} alt="Aktify Logo" />
              </a>
            </LinkContainer>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav activeKey={this.props.selectedKey}>
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
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={6} title="Jeff" id="basic-nav-dropdown" pullRight>
            <MenuItem eventKey={6.1}>Lorem ipsum</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={6.2}>Log out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  selectedKey: state.header.selectedKey,
})

export default connect(mapStateToProps, { toggleActive })(Header)
