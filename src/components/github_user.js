import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getScore } from '../actions';

class GithubUser extends Component {
  renderInput(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
        <div className="form-group">
            <label>{field.label}</label>
            <input className="form-control" type="text" {...field.input} />
            <div className="text-help">
                {touched ? error : ''}
            </div>
        </div>
    );
  }
    
  onSubmit(value) {
      this.props.getScore(value);
  }
    
  render() {
    const { handleSubmit } = this.props;
      
    return (
      <div className="col-md-6">
        <h1>GitHub Score</h1>
        <form className="inline-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Github Username" name="user" component={this.renderInput}></Field>
          <button className="btn btn-primary">Calculate my Github Score</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
    const errors = {};

    if (!values.user) {
        errors.user = 'Please enter username';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'UserForm'
})(
    connect(null, { getScore })(GithubUser)
);