import AuthButton from '@/features/auth/components/atoms/AuthButton';
import AuthInputField from '@/features/auth/components/atoms/AuthInputField';
import TextAtom from '@/features/components/TextAtom';
import { Box, Container, Grid } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import LanguageSwitcher from './../molecules/LanguajeSwitcher';

const DEFAULT_CREDENTIALS = {
  email: 'user@example.com',
  password: 'password123',
};

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(
      /^[a-zA-Z0-9_]+$/,
      'Username can only contain letters, numbers, and underscores',
    )
    .required('Username is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Signup: React.FC = () => {
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
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, setFieldError }) => {
            try {
              if (
                values.email === DEFAULT_CREDENTIALS.email &&
                values.password === DEFAULT_CREDENTIALS.password
              ) {
                navigate('/app/home');
              } else {
                setFieldError('email', t('signupScreen.invalidCredentials'));
                setFieldError('password', t('signupScreen.invalidCredentials'));
              }
            } catch {
              setFieldError('email', t('signupScreen.errorOccurred'));
              setFieldError('password', t('signupScreen.errorOccurred'));
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form style={{ width: '328px' }}>
              <Grid
                container
                spacing={1.5}
                direction="column"
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <Field
                    as={AuthInputField}
                    name="username"
                    variant="underlined"
                    label={t('signupScreen.usernameLabel')}
                    placeholder={t('signupScreen.usernamePlaceholder')}
                    error={touched.username && !!errors.username}
                    helperText={
                      touched.username && errors.username ? errors.username : ''
                    }
                    fullWidth
                    sx={{ width: '100%', maxWidth: '328px' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={AuthInputField}
                    name="email"
                    variant="underlined"
                    label={t('signupScreen.emailLabel')}
                    placeholder={t('signupScreen.emailPlaceholder')}
                    error={touched.email && !!errors.email}
                    helperText={
                      touched.email && errors.email ? errors.email : ''
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
                    label={t('signupScreen.passwordLabel')}
                    placeholder={t('signupScreen.passwordPlaceholder')}
                    error={touched.password && !!errors.password}
                    helperText={
                      touched.password && errors.password ? errors.password : ''
                    }
                    fullWidth
                    sx={{ width: '100%', maxWidth: '328px' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={AuthInputField}
                    name="confirmPassword"
                    type="password"
                    variant="underlined"
                    label={t('signupScreen.confirmPasswordLabel')}
                    placeholder={t('signupScreen.confirmPasswordPlaceholder')}
                    error={touched.confirmPassword && !!errors.confirmPassword}
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                        ? errors.confirmPassword
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
                    onClick={() => {}}
                    sx={{
                      mt: 2,
                      width: '100%',
                      maxWidth: '328px',
                      textTransform: 'none',
                    }}
                  >
                    {t('signupScreen.signup_title_button')}
                  </AuthButton>
                </Grid>
                <Box sx={{ height: '50px' }} />
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <TextAtom
                    variant="body"
                    size="small"
                    sx={{ fontSize: 'inherit' }}
                  >
                    {t('signupScreen.agree_terms')}
                    <AuthButton
                      type="button"
                      variant="text"
                      onClick={() => console.log('Button clicked!')}
                      sx={{
                        display: 'inline',
                        padding: 0,
                        margin: '0 5px',
                        fontSize: 'inherit',
                        textTransform: 'none',
                      }}
                    >
                      {t('signupScreen.terms_of_service')}
                    </AuthButton>
                    {t('signupScreen.and')}
                    <AuthButton
                      type="button"
                      variant="text"
                      onClick={() => console.log('Button clicked!')}
                      sx={{
                        display: 'inline',
                        textTransform: 'none',
                        fontSize: 'inherit',
                        padding: 0,
                        margin: '0 5px',
                      }}
                    >
                      {t('signupScreen.privacy_policy')}
                    </AuthButton>
                  </TextAtom>
                </Grid>
                <Box sx={{ height: '50px' }} />
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
                    sx={{ textAlign: 'center', fontSize: 'inherit' }}
                  >
                    {t('signupScreen.have_an_account')}
                    <AuthButton
                      type="button"
                      variant="text"
                      onClick={() => navigate('/')}
                      sx={{ ml: 1, textTransform: 'none', fontSize: 'inherit' }}
                    >
                      {t('signupScreen.login_title_button')}
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

export default Signup;
