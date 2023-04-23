import React, { useState, useEffect } from 'react';

function App() {
  // Declare state variables using the useState hook
  const [dogImage, setDogImage] = useState(null);

  // Use the useEffect hook to send a fetch request to the dog API and update state
  useEffect(() => {
    // Send the fetch request
    fetch('https://dog.ceo/api/breeds/image/random')
      // Convert the response to JSON format
      .then(response => response.json())
      // Update the state variable with the image URL
      .then(data => {
        setDogImage(data.message);
      })
      // Log any errors to the console
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // Render the component based on the state variable
  return (
    <div>
      {dogImage ? ( // If we have a dog image URL, render the image tag
        <img src={dogImage} alt="A Random Dog" />
      ) : ( // Otherwise, render a loading message
        <p>Loading...</p>
      )}
    </div>
  );
}

// Export the component as the default export
export default App;
