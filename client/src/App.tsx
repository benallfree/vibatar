import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Demo } from './pages/Demo';
import { Games } from './pages/Games';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
