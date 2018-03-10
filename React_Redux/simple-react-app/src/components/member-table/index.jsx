import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { tableLabels } from '../../common/consts'
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
      <td className="member-name-column">{userData.memberName}</td>
      <td className="member-kind-column">{userData.memberKind}</td>
    </tr>
  ))
  render = () => (
    <table className="user-table">
      <thead>
        <tr>
          <th className="id-column">{tableLabels.id}</th>
          <th className="member-name-column">{tableLabels.memberName}</th>
          <th className="member-kind-column">{tableLabels.memberKind}</th>
        </tr>
      </thead>
      <tbody>
        {this.renderUserData()}
      </tbody>
    </table>
  )
}