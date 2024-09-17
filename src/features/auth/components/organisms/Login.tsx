import AuthButton from '@/features/auth/components/atoms/AuthButton';
import AuthInputField from '@/features/auth/components/atoms/AuthInputField';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

type LoginProps = {
  onLogin: () => void;
};

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
      }}
    >
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
          <Typography
            variant="h3"
            sx={{
              color: '#6750A4',
              fontWeight: 'bold',
            }}
          >
            Workoo
          </Typography>
        </Box>
        <Box sx={{ height: '194px' }} />
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, setFieldError }) => {
            try {
              if (
                values.username === DEFAULT_CREDENTIALS.username &&
                values.password === DEFAULT_CREDENTIALS.password
              ) {
                onLogin();
                navigate('/app/home');
              } else {
                setFieldError('username', 'Invalid username or password');
                setFieldError('password', 'Invalid username or password');
              }
            } catch {
              setFieldError('username', 'An error occurred');
              setFieldError('password', 'An error occurred');
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form style={{ width: '328px' }}>
              <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <Field
                    as={AuthInputField}
                    name="username"
                    variant="underlined"
                    label="Username"
                    placeholder="Enter your username"
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
                    name="password"
                    type="password"
                    variant="underlined"
                    label="Password"
                    placeholder="Enter your password"
                    error={touched.password && !!errors.password}
                    helperText={
                      touched.password && errors.password ? errors.password : ''
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
                    sx={{ mt: 2, width: '100%', maxWidth: '328px' }}
                  >
                    Log In
                  </AuthButton>
                </Grid>
                <Grid item xs={12}>
                  <AuthButton
                    type="button"
                    variant="text"
                    fullWidth
                    onClick={() => console.log('Button clicked!')}
                    sx={{ width: '100%', maxWidth: '328px' }}
                  >
                    Forget Password?
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
                  <Typography>
                    Haven’t an account?
                    <AuthButton
                      type="button"
                      variant="text"
                      onClick={() => navigate('/register')}
                      sx={{ ml: 1 }}
                    >
                      Sign up
                    </AuthButton>
                  </Typography>
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
