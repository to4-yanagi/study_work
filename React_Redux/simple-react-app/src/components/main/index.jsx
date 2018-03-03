import React, { Component } from 'react'
import defaultUserData from '../../data/default-user-list'
import UserTable from '../user-table/index.jsx'
import './index.css'

export default class Main extends Component {
  state = {
    userDataList: defaultUserData
  }
  sortOfUserName = () => [...this.state.userDataList].sort(
    (a, b) => {
      if (a.userName < b.userName) {
        return -1
      } else if (a.userName > b.userName) {
        return 1
      } else {
        return 0
      }
    }
  )
  renderSortButton = () => (
    <button
      onClick={() => this.setState({
        userDataList: this.sortOfUserName()
      })}
    >
      名前の昇順ソート
    </button>
  )
  renderClearButton = () => (
    <button
      onClick={() => this.setState({
        userDataList: defaultUserData
      })}
    >
      クリア
    </button>
  )
  render = () => (
    <div>
      <header className="app-header">
        <h1 className="app-title">Simple React App</h1>
      </header>
      {this.renderSortButton()}
      {this.renderClearButton()}
      <UserTable
        userData={this.state.userDataList}
      />
    </div>
  )
}