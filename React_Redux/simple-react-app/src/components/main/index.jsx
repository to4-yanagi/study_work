import React, { Component } from 'react'
import defaultUserData from '../../data/default-user-list'
import MemberTable from '../member-table/index.jsx'
import { appTitle, buttonLabels } from '../../common/consts'
import './index.css'

export default class Main extends Component {
  state = {
    userDataList: defaultUserData
  }
  sortOfMemberName = () => [...this.state.userDataList].sort(
    (a, b) => {
      if (a.memberName < b.memberName) {
        return -1
      } else if (a.memberName > b.memberName) {
        return 1
      } else {
        return 0
      }
    }
  )
  renderSortButton = () => (
    <button
      onClick={() => this.setState({
        userDataList: this.sortOfMemberName()
      })}
    >
      {buttonLabels.ascSort}
    </button>
  )
  renderClearButton = () => (
    <button
      onClick={() => this.setState({
        userDataList: defaultUserData
      })}
    >
      {buttonLabels.clear}
    </button>
  )
  render = () => (
    <div>
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      {this.renderSortButton()}
      {this.renderClearButton()}
      <MemberTable
        userData={this.state.userDataList}
      />
    </div>
  )
}