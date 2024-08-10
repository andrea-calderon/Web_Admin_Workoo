import { Button, Container, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import '../../../../styles/App.css';

/*Include all the necessary values*/
type FormValues = {
  username: string;
  email: string;
  password: string;
};

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegisterForm: React.FC = () => {
  return (
    <Container maxWidth="xs" className="form-container">
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <Formik<FormValues>
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="username"
                  name="username"
                  label="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  className="text-field"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  className="text-field"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  className="text-field"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  className="submit-button"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>

          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterForm;
