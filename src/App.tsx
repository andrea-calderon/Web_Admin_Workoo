import React from 'react';
import './utils/i18n';
import './styles/App.css';
import LanguageSwitcher from './features/auth/components/molecules/LanguajeSwitcher';
import WelcomeComponent from './features/auth/components/molecules/Welcome';
import FormField from './features/auth/components/molecules/FormField';

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
      </div>
    </>
  );
};

export default App;
