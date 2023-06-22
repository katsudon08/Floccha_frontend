import TabList from '@mui/lab/TabList'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel/TabPanel'
import { Create_page } from '../pages/Create_page'
import Box from '@mui/material/Box'

export const TabArea = () => {
    return (
        <Box sx={{ height: "100%", width: "100%", typography: 'body1' }}>
            <TabContext value='1'>
                <Box sx={{ height: "10%", borderBottom: 1, borderColor: 'divider', backgroundColor: "base_color.main" }}>
                <TabList
                    textColor='secondary'
                >
                    <Tab label="Item One" value="1" />
                    <Tab label="Item Two" value="2" />
                    <Tab label="Item Three" value="3" />
                </TabList>
                </Box>
                <TabPanel value='1' sx={{ backgroundColor: "base_color.main", height: "90%", padding: 0 }}>
                    <Create_page />
                </TabPanel>
            </TabContext>
        </Box>
    )
}
