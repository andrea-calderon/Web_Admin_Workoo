import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import AuthInputField from '../../../components/atoms/AuthInputField';

const RegisterPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2} 
      padding={2} 
      maxWidth={400} 
      mx="auto" 
    >
      
      <AuthInputField
        variant="outlined"
        label="Outlined Input"
        placeholder="Input"
        leftIcon={<AccountCircleIcon />}
        actionIcon={<SearchIcon />} 
      />
      <br/><br/>
      
      <AuthInputField
        variant="underlined"
        label="Underlined Input"
        placeholder="Input"
        leftIcon={<AccountCircleIcon />}
        actionIcon={<SearchIcon />} 
      />
      <br/><br/>
      
      <AuthInputField
        variant="rounded"
        label="Rounded Input"
        placeholder="Input"
        leftIcon={<AccountCircleIcon />}
        actionIcon={<SearchIcon />} 
      />
      <br/><br/>
      
      <AuthInputField
        variant="outlined"  
        label="Error"
        placeholder="The username is incorrect"
        leftIcon={<AccountCircleIcon />}  
        actionIcon={<SearchIcon />} 
        error={true}  
        helperText="Username is required"  
      />
    </Box>
  );
};


export default RegisterPage;
