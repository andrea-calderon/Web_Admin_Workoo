import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const AuthSidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link to="/app/home"><HomeIcon/></Link></li>
          <li><Link to="/app/dashboard">Dashboard</Link></li>
          <li><Link to="/app/settings">Settings</Link></li>

        </ul>
      </nav>
    </aside>
  );
};

export default AuthSidebar;
