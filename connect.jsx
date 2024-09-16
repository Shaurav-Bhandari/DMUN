import axios from 'axios';

const registerUser = async (userData) => {
  try {
    const response = await axios.post('/api/auth/register', userData);
    console.log(response.data);
  } catch (error) {
    console.error('Registration error:', error.response.data);
  }
};

// Usage
registerUser({ username: 'testuser', email: 'test@test.com', password: '123456' });
