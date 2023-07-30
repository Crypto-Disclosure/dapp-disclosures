# Dapp-Disclosures

This is a basic web UI to view project disclosures formatted with the Crypto-Disclosure standard.

## Overview

This application fetches data from a single Crypto-Disclosure project JSON file hosted on GitHub and displays it on a single page website. It provides a display for the information contained within about the project, including the project name, description, tags, social media links, documentation, georestrictions, and assets.

## Installation and Setup

Follow these steps to set up and run this project locally:

1. **Clone the repository**: First, clone this repository to your local machine using the following command:

```bash
git clone https://github.com/Crypto-Disclosure/dapp-disclosures.git
```

2. **Navigate to the project directory**: Use the following command to navigate into the downloaded directory:

```bash
cd dapp-disclosures
```

3. Update the JSON file link: In the App.js file, find the useEffect hook that fetches the JSON data. Replace the URL in the fetch function with the URL of your JSON file. It should look something like this:

```
useEffect(() => {
    // Fetch the data from the GitHub link
    fetch('https://path.to/your/json/file')
      .then(response => response.json())
      .then(data => setDaoData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
```

4. **Install dependencies**: This project uses NPM for dependency management. Install all necessary dependencies with the following command:

```
npm install
```

5. **Start the development server**: Run the following command to start the development server:

```
npm start
```

After running this command, you should be able to see the application running at http://localhost:3000 or your specified port.

## Usage

After starting the application, you should see a single page website with various sections displaying data from the JSON file. This includes information such as the project's name, description, tags, social media links, documentation, georestrictions, and assets.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you want to contribute.

## License
