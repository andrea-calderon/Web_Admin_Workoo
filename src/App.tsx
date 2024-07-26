import React from 'react';
import './config/i18n/i18n';
import './styles/App.css';
import LanguageSwitcher from './features/auth/components/atoms/LanguajeSwitcher';
import WelcomeComponent from './features/auth/components/molecules/Welcome';

const App: React.FC = () => {
  
  return (
    <>
      <div>
        <h1>Projectx-HUNABKU</h1>
      </div>
      
      <div>
        <LanguageSwitcher/>
        <WelcomeComponent/>
      </div>
    </>
  )
}

export default App;
