import React from 'react';
import {reduxForm, Field} from 'redux-form';

import Input from './components/input.js';
import submitReport from './components/actions.js';
import {required, isEmpty, lengthCheck, isNumber} from './components/validator.js';

import './App.css';

class App extends React.Component {
  submitStuff(values) {
    console.log(values);
  }

  render() {
    return (
      <div className="delivery-form">
        <h2>Report a problem with your delivery</h2>
        <form onSubmit={this.props.handleSubmit(values => submitReport(values))}>
          <div className="form-input">
            <label htmlFor="trackingNumber">Tracking Number</label>
            <Field
              component={Input}
              element="input"
              name="trackingNumber"
              id="trackingNumber"
              type="text"
              validate={[required, isEmpty, lengthCheck, isNumber]}
            />
            <label htmlFor="issue">What is your issue?</label>
          </div>
          <div className="form-input">
            <Field
              component={Input}
              element="select"
              name="issue"
              id="issue"
              validate={[required]}
            >
              <option>Choose an issue</option>
              <option value="not-delivered">My delivery has not arrived</option>
              <option value="wrong-item">Wrong item was delivered</option>
              <option value="missing-part">Part of my delivery is missing</option>
              <option value="damaged-order">Part of my order is damaged</option>
              <option value="other">Other (Give details below)</option>
            </Field>
          </div>
          <div className="form-input">
            <label htmlFor="details">Give more details (optional)</label>
            <Field
              component="textarea"
              name="details"
              id="details">
            </Field>
          </div>
          <Field
            component="button"
            name="submit"
            type="submit">Submit
          </Field>
        </form>
      </div>
    );
  }
}

export default reduxForm({form: 'delivery'})(App);
