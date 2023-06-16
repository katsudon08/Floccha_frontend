import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

export const Footer = () => {
    return (
        <Box sx={{
            alignItems: 'flex-end',
            bottom: 0,
        }}>
            <AppBar component="footer" position='static' color='accent_color'>
                <Button color='accent_color'>a</Button>
            </AppBar>
        </Box>
    )
}
