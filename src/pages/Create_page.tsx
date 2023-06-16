import Button from '@mui/material/Button';
import { Header } from "../components/Header"
import { Hooder } from "../components/Hooder"
import Box from '@mui/material/Box/Box';

export const Create_page = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Header />
            <Box sx={{
                flexGrow: 1,
                flexDirection: 'column',
            }}>a
            </Box>
            <Hooder />
        </Box>
    )
}
