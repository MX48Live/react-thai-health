import './App.scss'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/Login"
import CreateAccount from "./pages/CreateAccount/CreateAccount"
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="create-account" element={<CreateAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;