import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Platforms from './components/Platforms';
import Documentation from './components/Documentation';
import Assets from './components/Assets';
import Georestrictions from './components/Georestrictions';

import './App.css';

function App() {
  const [daoData, setDaoData] = useState(null);
  /* const [isDarkMode, setIsDarkMode] = useState(false);*/

  useEffect(() => {
    // Fetch the data from the GitHub link
    fetch('https://raw.githubusercontent.com/Crypto-Disclosure/disclosures/main/cosmos/y-foundry.json')
      .then(response => response.json())
      .then(data => setDaoData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  /*
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  */

  if (!daoData) {
    return <div>Loading...</div>; // Display a loading message while waiting for the data to be fetched
  }

  return (
    <div>
      {/*
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle dark mode
      </button>
      */}
      <Header name={daoData.name} description={daoData.description} />
      <Platforms platforms={daoData.platforms} />
      <Documentation documentation={daoData.documentation} />
      <Assets assets={daoData.assets} />
      <Georestrictions georestrictions={daoData.documentation[0].georestrictions} />
      {/* Other components will go here, and you will pass the appropriate data to them as props */}
    </div>
  );
}

export default App;
