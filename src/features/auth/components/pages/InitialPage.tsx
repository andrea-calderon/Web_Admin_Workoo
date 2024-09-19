import TextAtom from '@/features/components/TextAtom';
import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Login from '../organisms/Login';
import Signup from '../organisms/Signup';

interface InitialPageProps {
  onLogin: () => void;
}

const InitialPage: React.FC<InitialPageProps> = ({ onLogin }) => {
  const location = useLocation();
  const { t } = useTranslation();

  console.log('Current pathname:', location.pathname);

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: '#F4F4F4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '500px',
            mx: 'auto',
            textAlign: 'center',
          }}
        >
          <TextAtom
            variant="headline"
            size="small"
            sx={{
              mb: 2,
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              letterSpacing: '0.5px',
              fontWeight: 'bold',
            }}
          >
            {t('initialScreen.initialTitle')}
          </TextAtom>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <img
            src="src\assets\images\Main_screen_img_bg.svg"
            alt="Initial screen"
            style={{
              width: '416px',
              height: '518px',
              borderRadius: '5%',
            }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
          backgroundColor: '#fff',
        }}
      >
        {location.pathname.includes('/login') && <Login onLogin={onLogin} />}
        {location.pathname.includes('/signup') && <Signup />}
      </Grid>
    </Grid>
  );
};

export default InitialPage;
