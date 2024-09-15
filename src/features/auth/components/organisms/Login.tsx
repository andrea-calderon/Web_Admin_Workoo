import AuthButton from '@/features/auth/components/atoms/AuthButton';
import AuthInputField from '@/features/auth/components/atoms/AuthInputField';
import { Box, Container, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
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
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#F4F4F4',
      }}
    >
      <Box
        sx={{
          width: '483px',
          height: '100vh',
          padding: '40px',
          bgcolor: '#fff',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#6750A4',
            fontWeight: 'bold',
            marginTop: '143px',
            //marginLeft: '1114px',
            gap: '10px',
          }}
        >
          Workoo
        </Typography>

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
          {({ isSubmitting }) => (
            <Form>
              <Box
                sx={{
                  position: 'absolute',
                  top: '337px',
                  left: '800px',
                  gap: '8px',
                  opacity: 1,
                  width: '328px',
                }}
              >
                <Field
                  as={AuthInputField}
                  name="username"
                  variant="underlined"
                  label="Username"
                  placeholder="Enter your username"
                  helperText={<ErrorMessage name="username" />}
                  error={!!(<ErrorMessage name="username" />)}
                  sx={{
                    width: '328px',
                    height: '48px',
                    opacity: 1,
                  }}
                />
                <Box></Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '409px',
                  left: '800px',
                  gap: '8px',
                  opacity: 1,
                  width: '328px',
                }}
              >
                <Field
                  as={AuthInputField}
                  name="password"
                  type="password"
                  variant="underlined"
                  label="Password"
                  placeholder="Enter your password"
                  helperText={<ErrorMessage name="password" />}
                  error={!!(<ErrorMessage name="password" />)}
                  sx={{
                    width: '328px',
                    height: '48px',
                    opacity: 1,
                  }}
                />
                <Box></Box>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '490px',
                  left: '800px',
                  gap: '8px',
                  opacity: 1,
                }}
              >
                <AuthButton
                  type="submit"
                  variant="filled"
                  fullWidth={true}
                  disabled={isSubmitting}
                  onClick={() => navigate('/app')}
                  sx={{
                    minWidth: '328px',
                    height: '48px',
                    opacity: 1,
                  }}
                >
                  Log In
                </AuthButton>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '550px',
                  left: '800px',
                  gap: '8px',
                  opacity: 1,
                }}
              >
                <AuthButton
                  type="submit"
                  variant="text"
                  fullWidth={true}
                  onClick={() => console.log('Button clicked!')}
                  sx={{
                    minWidth: '328px',
                    height: '48px',
                    opacity: 1,
                  }}
                >
                  Forget Password?
                </AuthButton>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '741px',
                  left: '850px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: 1,
                }}
              >
                <Typography
                  sx={{
                    width: 'auto',
                    height: '20px',
                    opacity: 1,
                    textAlign: 'center',
                  }}
                >
                  Haven’t an account?
                </Typography>
                <AuthButton
                  type="submit"
                  variant="text"
                  fullWidth={true}
                  onClick={() => navigate('/register')}
                  sx={{
                    width: '77px',
                    height: '48px',
                    opacity: 1,
                  }}
                >
                  <a href="#"> Sign up</a>
                </AuthButton>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
