import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { buttonLabels } from '../../common/consts'
import './buttons.css'

export default class Buttons extends Component {
  static propTypes = {
    sortOfMemberName: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired
  }
  static defaultProps = {
    sortOfMemberName: () => { },
    clear: () => { }
  }
  render = () => (
    <div className="button-space">
      <button
        onClick={this.props.sortOfMemberName}
        className="sort-button"
      >
        {buttonLabels.ascSort}
      </button>
      <button
        onClick={this.props.clear}
        className="clear-button"
      >
        {buttonLabels.clear}
      </button>
    </div>
  )
}