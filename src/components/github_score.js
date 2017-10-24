import React, { Component } from 'react';
import { connect } from 'react-redux';

class GithubScore extends Component {
  render() {
    let { scores } = this.props;
    let status = {color: 'black'};
    let message = '';
    if(!scores.score) {
        scores.score = 0;
    } else if(scores.score < 20) {
        message = "Needs Work!";
        status = {color: 'red'};
    } else if(scores.score < 50) {
        message = "A decent start!";
        status = {color: 'orange'};
    } else if(scores.score < 100) {
        message = "Doing Good!";
        status = {color: 'black'};
    } else if(scores.score < 200) {
        message = "Greate Job!";
        status = {color: 'green'};
    } else if (scores.score > 200) {
        message = "Github Elite";
        status = {color: 'blue'};
    }

    return (
        <div className="col-md-6">
            <h1>Your Score: {scores.score}</h1>
            <p style={status}>{message}</p>
        </div>
    );
  }
}

function mapStateToProps(state) {
    return { scores: state.scores };
}

export default connect(mapStateToProps)(GithubScore);