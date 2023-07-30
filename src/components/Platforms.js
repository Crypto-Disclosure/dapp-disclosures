// Platforms.js

import React from 'react';
import './Platforms.css';

// Mapping of platforms to their favicon URLs
const platformIcons = {
  'twitter': 'https://twitter.com/favicon.ico',
  'telegram': 'https://telegram.org/favicon.ico',
  'github': 'https://github.com/favicon.ico',
  // Add other platforms and their favicon URLs here
};

// Default favicon URL for platforms not listed above
const defaultIcon = 'https://img.icons8.com/?size=512&id=68406&format=png';

const Platforms = ({ platforms }) => (
  <div className="platforms-container">
    
    {Object.entries(platforms).map(([platform, url], index) => {
      // Determine the favicon URL for this platform
      const iconURL = platformIcons[platform] || defaultIcon;
      
      return url ? (
        <div key={index} className="platform-item">
          <img src={iconURL} alt={platform} />
          <a href={url}>{platform}</a>
        </div>
      ) : null;
    })}
  </div>
);

export default Platforms;
