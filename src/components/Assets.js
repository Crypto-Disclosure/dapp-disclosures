// Assets.js

import React from 'react';
import './Assets.css';

const Assets = ({ assets }) => (
  <div>
    {assets.map((asset, index) => (
      <div key={index}>
        <h2>Assets</h2>
        <h3>{asset.name}</h3>
        <p>{asset.description}</p>
        <h4>Addresses</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {asset.addresses.map((address, index) => (
              <tr key={index}>
                <td>{address.name}</td>
                <td>{address.description}</td>
                <td>{address.type}</td>
                <td>{address.allocation[0].amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
);

export default Assets;
