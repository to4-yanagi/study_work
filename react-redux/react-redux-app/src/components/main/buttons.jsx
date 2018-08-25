import React, { Component } from 'react'
import PropTypes from 'prop-types'
import defaultUserData from '../../data/default-user-list'
import { buttonLabels } from '../../common/consts'
import './buttons.css'

export default class Buttons extends Component {
  static propTypes = {
    memberList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    putMemberList: PropTypes.func.isRequired
  }
  static defaultProps = {
    memberList: [],
    putMemberList: () => { }
  }
  sortOfMemberName = () => [...this.props.memberList].sort(
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
    <div className="button-space">
      <button
        onClick={() => this.props.putMemberList(this.sortOfMemberName())}
        className="sort-button"
      >
        {buttonLabels.ascSort}
      </button>
      <button
        onClick={() => this.props.putMemberList(defaultUserData)}
        className="clear-button"
      >
        {buttonLabels.clear}
      </button>
    </div>
  )
}