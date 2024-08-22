import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/app/dashboard">Dashboard</Link></li>
          <li><Link to="/app/settings">Settings</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default AuthHeader;
