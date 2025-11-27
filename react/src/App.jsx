import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './AdminPage';
import Rental from './Rental';
import DryCleaning from './drycleaning';
import Repair from './repair';
import Post from './PostRent';
import Inventory from './Inventory';
import Customize from './Customize';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element ={<AdminPage />} Navigate to = "admin"></Route>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/drycleaning" element={<DryCleaning />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/Customize" element={<Customize />} />
      </Routes>
    </Router>
  );
}

export default App;