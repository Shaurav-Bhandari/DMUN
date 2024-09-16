import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/hero';
import About from './components/about';
import Features from './components/Features';
import LoginPage from './components/Login';
import PrivateRoute from './components/privateroute';
import Layout from './components/layouts'; // Import the Layout component

function App() {
  return (
    <>
    <Header/>
      <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Hero />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/features"
        element={
          <Layout>
            <Features />
          </Layout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/protected"
        element={
          <PrivateRoute element={<Layout><div>Protected Page</div></Layout>} />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  )
}

export default App;
