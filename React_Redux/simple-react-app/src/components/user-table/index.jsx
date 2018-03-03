import React, { Component } from 'react';
import consts from './consts'
import defaultUserData from '../../data/default-user-list'
import './index.css';

export default class UserTable extends Component {
  renderUserData = () => defaultUserData.map(userData => (
    <tr>
      <td>{userData.id}</td>
      <td>{userData.userName}</td>
      <td>{userData.kind}</td>
    </tr>
  ))
  render = () => (
    <table>
      <tr>
        <td>{consts.id}</td>
        <td>{consts.userName}</td>
        <td>{consts.kind}</td>
      </tr>
      {this.renderUserData()}
    </table>
  )
}