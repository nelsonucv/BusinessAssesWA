import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import LandingPage from './components/LandingPage';
import { Assessment } from './components/Assessment';
import { Results } from './components/Results';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/results" element={<Results />} />
      </Route>
    </Routes>
  );
}

export default App;
