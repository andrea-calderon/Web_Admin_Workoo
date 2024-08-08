import React from 'react';
import FormField from './features/auth/components/molecules/FormField';
import LanguageSwitcher from './features/auth/components/molecules/LanguajeSwitcher';
import LoggerComponent from './features/auth/components/molecules/LoggerComponent';
import WelcomeComponent from './features/auth/components/molecules/Welcome';
import './styles/App.css';
import './utils/i18n';

const App: React.FC = () => {
  
  return (
    <>
      <div>
        <h1>Projectx-HUNABKU</h1>
      </div>
      
      <div>
        <LanguageSwitcher/>
        <WelcomeComponent/>
        <FormField/>
        <br/>
        <LoggerComponent/>
      </div>
    </>
  );
};

export default App;
