import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/app/dashboard">Dashboard</Link></li>
          <li><Link to="/app/settings">Settings</Link></li>
          {/* More links can be added here as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default AuthHeader;
