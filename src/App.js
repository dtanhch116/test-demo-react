// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import User from './components/User/User';
import Admin from './components/Admin/Admin';

import { Link } from 'react-router-dom';

const App = () => {

  return (

    <div className="app-container">
      <Header />
      <div>
        test link
        <div>
          <button className="">
            <Link to="/users">User</Link>
          </button>
          <button className="">
            <Link to="/admins">Admin</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
