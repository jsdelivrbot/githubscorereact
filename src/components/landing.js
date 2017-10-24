import React, { Component } from 'react';
import GithubUser from './github_user';
import GithubScore from './github_score';

export default class Landing extends Component {
  render() {
    return (
      <div className="row">
        <GithubUser />
        <GithubScore />
      </div>
    );
  }
}
