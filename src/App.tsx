import React from 'react';
import { I18nextProvider } from 'react-i18next';
import FormField from './features/auth/components/molecules/FormField';
import LanguageSwitcher from './features/auth/components/molecules/LanguajeSwitcher';
import WelcomeComponent from './features/auth/components/molecules/Welcome';
import './styles/App.css';
import i18n from './utils/i18n';

const App: React.FC = () => {
  
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <h1>Projectx-HUNABKU</h1>
      </div>
      
      <div>
        <LanguageSwitcher/>
        <WelcomeComponent/>
        <FormField/>
      </div>
    </I18nextProvider>
  );
};

export default App;
