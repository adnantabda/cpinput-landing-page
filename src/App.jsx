import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Your main interface
import CpinputDocs from './CPInputdocs';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs" element={<CpinputDocs />} />
    </Routes>
  );
}


