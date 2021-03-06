import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import './app.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Navigate to="/register" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          {user && (
            <>
              <Route path="/movies" element={<Home type="movies" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
};
export default App;
