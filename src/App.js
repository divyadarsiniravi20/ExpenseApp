import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';

import FamilyExpenseTracker from './Components/FamilyExpenseTracker';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/sign" element={<SignUpPage/>} />
          <Route path="/fet" element={<FamilyExpenseTracker/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
