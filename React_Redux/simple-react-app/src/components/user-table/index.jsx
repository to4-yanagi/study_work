import React, { Component } from 'react'
import PropTypes from 'prop-types'
import consts from './consts'
import './index.css'

export default class UserTable extends Component {
  static propTypes = {
    userData: PropTypes.arrayOf(PropTypes.shape()).isRequired
  }
  static defaultProps = {
    userData: []
  }
  renderUserData = () => this.props.userData.map(userData => (
    <tr key={userData.id}>
      <td className="id-column">{userData.id}</td>
      <td className="user-name-column">{userData.userName}</td>
      <td className="kind-column">{userData.kind}</td>
    </tr>
  ))
  render = () => (
    <table className="user-table">
      <thead>
        <tr>
          <th className="id-column">{consts.id}</th>
          <th className="user-name-column">{consts.userName}</th>
          <th className="kind-column">{consts.kind}</th>
        </tr>
      </thead>
      <tbody>
        {this.renderUserData()}
      </tbody>
    </table>
  )
}