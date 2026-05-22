// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import User from './components/User/User';
import Admin from './components/Admin/Admin';

import { Link, Outlet } from 'react-router-dom';

const App = () => {

  return (

    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>

      <div className="main-container">
      </div>
      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
