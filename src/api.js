// src/api.js (or similar)
export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data'); // API endpoint
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  