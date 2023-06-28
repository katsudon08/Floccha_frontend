import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Create_page } from '../pages/Create_page'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, index, value, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const allyProps = (index: number) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

export const TabArea = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        // <Box sx={{ height: "100%", width: "100%", typography: 'body1' }}>
        //     <TabContext value='1'>
        //         <Box sx={{ height: "10%", borderBottom: 1, borderColor: 'divider', backgroundColor: "base_color.main" }}>
        //         <TabList
        //             textColor='secondary'
        //         >
        //             <Tab label="Item One" value="1" />
        //             <Tab label="Item Two" value="2" />
        //             <Tab label="Item Three" value="3" />
        //         </TabList>
        //         </Box>
        //         <TabPanel value='1' sx={{ backgroundColor: "base_color.main", height: "90%", padding: 0 }}>
        //             <Create_page />
        //         </TabPanel>
        //     </TabContext>
        // </Box>

        <Box sx={{width: "100%"}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value}>
                    <Tab label="Item one" {...allyProps(0)} />
                    <Tab label="Item two" {...allyProps(1)} />
                    <Tab label="Item three" {...allyProps(2)} />
                </Tabs>
            </Box>
        </Box>

        // TabとCreatePage
    )
}
