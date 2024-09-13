import TextAtom from '@/features/components/TextAtom';
import { Box, Typography } from '@mui/material';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1">
        This is the main landing page of your application. You can navigate to other sections using the sidebar.
      </Typography>
      <br/>
      <div>
        <TextAtom variant="title" size='large'>Examples of Text Atom:</TextAtom>
        <br/>
        <TextAtom variant="display" size="large">Display Large Example</TextAtom>
        <br/>
        <TextAtom variant="headline" size="medium">Headline Medium Example</TextAtom>
        <br/>
        <TextAtom variant="body" size="small">Body Small Example</TextAtom>
      </div>
    </Box>
  );
};

export default HomePage;
