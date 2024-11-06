async function fetchCarImage() {
    const carMake = document.getElementById('carMake').value;
    const carModel = document.getElementById('carModel').value;
    const carYear = document.getElementById('carYear').value;
  
    // Replace this URL with the API endpoint (here we use the Car Imagery API as an example)
    const apiUrl = `https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${carYear}+${carMake}+${carModel}`;
  
    try {
      const response = await fetch(apiUrl);
      const textData = await response.text(); // Get the response as text since Car Imagery API returns XML.
  
      // Parse the XML response to extract the URL
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(textData, "application/xml");
      const imageUrl = xmlDoc.getElementsByTagName("string")[0].childNodes[0].nodeValue;
  
      if (imageUrl) {
        const carImage = document.getElementById('carImage');
        carImage.src = imageUrl;
        carImage.style.display = 'block'; // Show the image
      } else {
        alert('Car image not found. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching the car image:', error);
      alert('Error fetching the car image. Please check the inputs or try again later.');
    }
  }