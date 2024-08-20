import { Link } from 'react-router-dom';

const AuthSidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link to="/app/dashboard">Dashboard</Link></li>
          <li><Link to="/app/settings">Settings</Link></li>
          {/* More links can be added here as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default AuthSidebar;
