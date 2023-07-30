// Documentation.js

import React from 'react';
import './Documentation.css';

const Documentation = ({ documentation }) => (
  <div>
    {documentation.map((doc, index) => (
      <div key={index}>
        <h2>Documentation</h2>
        <h3>Disclaimers</h3>
        <div className="document-container">
          {doc.disclaimers.map((disclaimer, index) => (
            <div key={index} className="document-item">
              <a href={disclaimer.url}>{disclaimer.type.toUpperCase()}</a>
            </div>
          ))}
        </div>
        <h3>Audits</h3>
        {doc.audits.map((audit, index) => (
          <div key={index} className="document-item">
            <p>{audit.name}</p>
            <p>Auditor: {audit.auditor}</p>
            <a href={audit.url}>GO TO</a>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Documentation;
