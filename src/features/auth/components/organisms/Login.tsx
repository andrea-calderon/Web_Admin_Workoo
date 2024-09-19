import AuthButton from '@/features/auth/components/atoms/AuthButton';
import AuthInputField from '@/features/auth/components/atoms/AuthInputField';
import TextAtom from '@/features/components/TextAtom';
import { Box, Container, Grid } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import LanguageSwitcher from '../molecules/LanguajeSwitcher';

interface LoginProps {
  onLogin: () => void;
}

const DEFAULT_CREDENTIALS = {
  username: 'admin',
  password: 'password123',
};

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(
      /^[a-zA-Z0-9_]+$/,
      'Username can only contain letters, numbers, and underscores',
    )
    .required('Username is required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#F4F4F4',
        position: 'relative',
      }}
    >
      <LanguageSwitcher
        sx={{
          position: 'absolute',
          top: 16,
          right: 75,
          zIndex: 1000,
        }}
      />

      <Box
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: '483px',
          padding: 0,
          bgcolor: '#fff',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            width: '181.47px',
            height: '36.9px',
          }}
        >
          <TextAtom
            variant="display"
            size="large"
            sx={{
              color: '#6750A4',
              fontWeight: 'bold',
            }}
          >
            Workoo
          </TextAtom>
        </Box>
        <Box sx={{ height: '75px' }} />
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, setFieldError }) => {
            try {
              if (
                values.username === DEFAULT_CREDENTIALS.username &&
                values.password === DEFAULT_CREDENTIALS.password
              ) {
                navigate('/app/home');
              } else {
                setFieldError('username', t('loginScreen.invalidCredentials'));
                setFieldError('password', t('loginScreen.invalidCredentials'));
              }
            } catch {
              setFieldError('username', t('loginScreen.errorOccurred'));
              setFieldError('password', t('loginScreen.errorOccurred'));
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form style={{ width: '328px' }}>
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <Field
                    as={AuthInputField}
                    name="username"
                    variant="underlined"
                    label={t('loginScreen.usernameLabel')}
                    placeholder={t('loginScreen.usernamePlaceholder')}
                    error={touched.username && !!errors.username}
                    helperText={
                      touched.username && errors.username
                        ? t('loginScreen.invalidCredentials')
                        : ''
                    }
                    fullWidth
                    sx={{ width: '100%', maxWidth: '328px' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={AuthInputField}
                    name="password"
                    type="password"
                    variant="underlined"
                    label={t('loginScreen.passwordLabel')}
                    placeholder={t('loginScreen.passwordPlaceholder')}
                    error={touched.password && !!errors.password}
                    helperText={
                      touched.password && errors.password
                        ? t('loginScreen.invalidCredentials')
                        : ''
                    }
                    fullWidth
                    sx={{ width: '100%', maxWidth: '328px' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <AuthButton
                    type="submit"
                    variant="filled"
                    fullWidth
                    disabled={isSubmitting}
                    onClick={onLogin}
                    sx={{
                      mt: 2,
                      width: '100%',
                      maxWidth: '328px',
                      textTransform: 'none',
                    }}
                  >
                    {t('loginScreen.login_title_button')}
                  </AuthButton>
                </Grid>
                <Grid item xs={12}>
                  <AuthButton
                    type="button"
                    variant="text"
                    fullWidth
                    onClick={() => console.log('Button clicked!')}
                    sx={{
                      width: '100%',
                      maxWidth: '328px',
                      textTransform: 'none',
                    }}
                  >
                    {t('loginScreen.forget_password')}
                  </AuthButton>
                </Grid>
                <Box sx={{ height: '191px' }} />
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <TextAtom
                    variant="body"
                    size="small"
                    sx={{ textAlign: 'center' }}
                  >
                    {t('loginScreen.have_not_account')}
                    <AuthButton
                      type="button"
                      variant="text"
                      onClick={() => navigate('/register')}
                      sx={{ ml: 1, textTransform: 'none' }}
                    >
                      {t('loginScreen.signup_title_button')}
                    </AuthButton>
                  </TextAtom>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
