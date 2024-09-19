import TextAtom from '@/features/components/atoms/TextAtom';
import { Box } from '@mui/material';
import React from 'react';
import AuthButton from '../atoms/AuthButton';
import { useAppSelector } from '@/hooks/useAppSelector';
import { loginSuccess, selectAuth } from '@/redux/slices/authSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useGetExampleDataQuery } from '@/services/api';

const HomePage: React.FC = () => {
  //http request
  const dispatch = useAppDispatch();
  const authState = useAppSelector(selectAuth);
  const { data } = useGetExampleDataQuery();
  const handleLogin = () => {
    // Simulate a login API call
    const user = { id: '1', name: 'John Doe', email: 'john.doe@example.com' };
    dispatch(loginSuccess(user));
  };
  return (
    <Box
      sx={{
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <TextAtom variant="headline" size="medium" sx={{ mb: 2 }}>
        Welcome to the Home Page
      </TextAtom>
      <TextAtom variant="body" size="small">
       Example data from API {JSON.stringify(data)}
      </TextAtom>
      <TextAtom variant="body" size="small">
       {JSON.stringify(authState)}
      </TextAtom>
      <AuthButton variant="elevated" onClick={handleLogin}>
        Simulate Auth User
      </AuthButton>
      <TextAtom variant="body" size="small">
        You can navigate to other sections using the sidebar or click on the
        `Workoo` text to return to `home`.
      </TextAtom>
      <br />
    </Box>
  );
};

export default HomePage;
