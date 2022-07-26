import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={ ROUTES.DASHBOARD } element={ <Dashboard /> } />
      </Routes>
    </Router>
  );
}

export default App;
