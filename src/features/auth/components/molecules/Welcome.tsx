import React from 'react';
import { useTranslation } from 'react-i18next';

const WelcomeComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button>{t('login')}</button>
    </div>
  );
};

export default WelcomeComponent;
