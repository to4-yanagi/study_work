import React, { Component } from 'react';
import UserTable from '../user-table/index.jsx'
import './index.css';

export default class Main extends Component {
  render = () => (
    <div>
      <header className="App-header">
        <h1 className="App-title">Simple React App</h1>
      </header>
      <UserTable />
    </div>
  )
}