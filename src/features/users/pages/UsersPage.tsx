import AuthButton from '@/features/auth/components/atoms/AuthButton';
import AuthInputField from '@/features/components/atoms/AuthInputField';
import TextAtom from '@/features/components/atoms/TextAtom';
import { Avatar, Box, Grid2, Tab, Tabs } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const UsersPage: React.FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (_t: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 12, md: 2 }}>
              <TextAtom variant={'display'} size={'small'}>
                <Avatar sx={{ bgcolor: 'purple' }}>OP</Avatar>
              </TextAtom>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
              <TextAtom variant={'display'} size={'small'}>
                <AuthInputField
                  variant="outlined"
                  label="Outlined Input"
                  placeholder="Input"
                />
                <AuthInputField
                  variant="outlined"
                  label="Outlined Input"
                  placeholder="Input"
                />
              </TextAtom>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
              <TextAtom variant={'display'} size={'small'}>
                <AuthInputField
                  variant="outlined"
                  label="Outlined Input"
                  placeholder="Input"
                />
                <AuthInputField
                  variant="outlined"
                  label="Outlined Input"
                  placeholder="Input"
                />
              </TextAtom>
            </Grid2>
          </Grid2>
          <AuthButton
            type="button"
            variant="filled"
            onClick={() => console.log('Button clicked!')}
            sx={{ ml: 1, textTransform: 'none', fontSize: 'inherit' }}
          >
            {t('signupScreen.login_title_button')}
          </AuthButton>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
};

export default UsersPage;
