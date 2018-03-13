import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MemberTable from '../../containers/main/member-table'
import Buttons from '../../containers/main/buttons'
import defaultUserData from '../../data/default-user-list'
import { appTitle } from '../../common/consts'
import './index.css'

export default class Main extends Component {
  static propTypes = {
    putMemberList: PropTypes.func.isRequired
  }
  static defaultProps = {
    putMemberList: () => { }
  }
  componentWillMount() {
    // 本来はGETの通信
    this.props.putMemberList(defaultUserData)
  }
  render = () => (
    <div>
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      <Buttons />
      <MemberTable />
    </div>
  )
}