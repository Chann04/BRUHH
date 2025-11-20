import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './AdminPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
