import React from 'react';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="delivery-form">
        <h2>Report a problem with your delivery</h2>
        <form>
          <div className="form-input">
            <label htmlFor="tracking-number">Tracking Number</label>
            <input name="tracking-number" id="trackingNumber" type="text"/>
            <label htmlFor="issue">What is your issue?</label>
          </div>
          <div className="form-input">
            <select name="issue" id="issue">
              <option value="not-delivered">My delivery has not arrived</option>
              <option value="wrong-item">Wrong item was delivered</option>
              <option value="missing-part">Part of my delivery is missing</option>
              <option value="damaged-order">Part of my order is damaged</option>
              <option value="other">Other (Give details below)</option>
            </select>
          </div>
          <div className="form-input">
            <label htmlFor="details">Give more details (optional)</label>
            <textarea name="details" id="details"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
