import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import LandingPage from './components/LandingPage';
import { Assessment } from './components/Assessment';
import { Results } from './components/Results';
import { ProcessBreakdown } from './components/ProcessBreakdown';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="results" element={<Results />} />
        <Route path="breakdown" element={<ProcessBreakdown />} />
      </Route>
    </Routes>
  );
}

export default App;
