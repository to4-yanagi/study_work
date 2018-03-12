import React, { Component } from 'react'
import MemberTable from './member-table'
import Buttons from './buttons'
import defaultUserData from '../../data/default-user-list'
import { appTitle } from '../../common/consts'
import './index.css'

export default class Main extends Component {
  state = {
    userDataList: defaultUserData
  }
  setProperty = data => this.setState({
    userDataList: data
  })
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
  render = () => (
    <div>
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      <Buttons
        sortOfMemberName={() => this.setProperty(this.sortOfMemberName())}
        clear={() => this.setProperty(defaultUserData)}
      />
      <MemberTable
        userData={this.state.userDataList}
      />
    </div>
  )
}