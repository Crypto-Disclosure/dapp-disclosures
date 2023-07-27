import React, { useState, useEffect } from 'react';
import Header from './components/Header';
// Your other component imports here
// ...

function App() {
  const [daoData, setDaoData] = useState(null);

  useEffect(() => {
    // Fetch the data from the GitHub link
    fetch('https://raw.githubusercontent.com/Crypto-Disclosure/disclosures/main/cosmos/y-foundry.json')
      .then(response => response.json())
      .then(data => setDaoData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!daoData) {
    return <div>Loading...</div>; // Display a loading message while waiting for the data to be fetched
  }

  return (
    <div>
      <Header name={daoData.name} description={daoData.description} />
      {/* Other components will go here, and you will pass the appropriate data to them as props */}
    </div>
  );
}

export default App;
