import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import PullRequests from './pages/pull-requests/pull-requests';
import Preferences from './pages/preferences/preferences';
import profileStore from './services/profiles.service';
// import icon from '../../assets/icon.svg';
// import './App.css';

export default function App() {
  const [chatState] = useState(profileStore);

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Hello />} /> */}
        <Route path="/" element={<PullRequests profiles={chatState.data} />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </Router>
  );
}
