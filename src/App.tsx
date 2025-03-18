import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Feed } from './pages/Feed';
import { Leaderboard } from './pages/Leaderboard';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Navbar } from './components/Navbar';

function App() {
  // Mock authentication state
  const isAuthenticated = true;

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <div className={`${isAuthenticated ? 'pt-16' : ''}`}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="*"
            element={
              isAuthenticated ? (
                <Navigate to="/feed" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;