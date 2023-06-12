import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function HRTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', display:'flex'}} justifyContent="flex-end">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Summary" />
        <Tab label="Applications" />
        <Tab label="Profile" />
      </Tabs>
    </Box>
  );
}