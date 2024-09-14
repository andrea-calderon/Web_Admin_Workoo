import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthButton from '../atoms/AuthButton';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    //console.log(`Changing language to: ${lng}`);
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <AuthButton onClick={() => changeLanguage('en')}>English</AuthButton>
      <AuthButton onClick={() => changeLanguage('es')}>Español</AuthButton>
    </div>
  );
};

export default LanguageSwitcher;
