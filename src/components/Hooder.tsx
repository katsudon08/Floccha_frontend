import { Box, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

export const Hooder = () => {

    return (
        <Box sx={{
            alignItems: 'flex-end'
        }}>
            <AppBar position='static' color='accent_color'>
                <Button color='accent_color'>a</Button>
            </AppBar>
        </Box>
    )
}
