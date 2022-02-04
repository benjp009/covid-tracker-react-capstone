import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import './styles/App.css';
import './styles/Countries.css';
import './styles/DetailsPage.css';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/HomePage.css';



function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(<HomePage />)}
      />
      <Route
        path="/:Country"
        element={(<DetailsPage />)}
      />
    </Routes>
  );
}

export default App;
