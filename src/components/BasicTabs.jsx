import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddUser from '../containers/AddUser';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
    const { tabData }  = props;
    const { tab_items, top_level_props = {} } = tabData;
    const { background = 'transparent' } = top_level_props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: background, color: 'white' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Synoption top level">
           {tab_items.map((tab, index) =>
             <Tab textColor="white" className="text-white" label={tab.title} {...a11yProps(index)} />
            )}
        </Tabs>
      </Box>
        {tab_items.map((tab, index) =>
            <TabPanel value={value} index={index}>
             { tab.tabGroup && <BasicTabs tabData={tab}/> }
             { tab.tabAction && <AddUser tabInfo={tab}/>}
            </TabPanel>
        )}
    </Box>
  );
}
