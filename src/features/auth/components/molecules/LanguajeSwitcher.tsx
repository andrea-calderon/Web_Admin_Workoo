import { SxProps } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthButton from '../atoms/AuthButton';

interface LanguageSwitcherProps {
  sx?: SxProps;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ sx }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <AuthButton variant="tonal" onClick={toggleLanguage} sx={sx}>
      {i18n.language === 'en' ? 'Español' : 'English'}
    </AuthButton>
  );
};

export default LanguageSwitcher;
