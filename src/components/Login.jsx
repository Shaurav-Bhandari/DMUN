import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend API URL
      const response = await axios.post('http://localhost:5001/api/auth/register', { email, password });
      setMessage('Registration successful!');
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  const handleGoogleSignIn = () => {
    // OAuth logic for Google Sign-In will go here
  };

  const handleFacebookSignIn = () => {
    // OAuth logic for Facebook Sign-In will go here
  };

  const handleLinkedInSignIn = () => {
    // OAuth logic for LinkedIn Sign-In will go here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Register for DWIT MUN</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div className="p-2">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="p-2">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>

          {message && (
            <div className="mt-4 text-center text-gray-900">
              {message}
            </div>
          )}
        </form>

        <div className="mt-8 space-y-4">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="relative flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google Logo"
              className="mr-2"
            />
            Sign in with Google
          </button>

          <button
            type="button"
            onClick={handleFacebookSignIn}
            className="relative flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <img
              src="https://img.icons8.com/color/16/000000/facebook.png"
              alt="Facebook Logo"
              className="mr-2"
            />
            Sign in with Facebook
          </button>

          <button
            type="button"
            onClick={handleLinkedInSignIn}
            className="relative flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            <img
              src="https://img.icons8.com/color/16/000000/linkedin.png"
              alt="LinkedIn Logo"
              className="mr-2"
            />
            Sign in with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
