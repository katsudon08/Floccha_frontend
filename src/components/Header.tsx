import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import { TextEditor } from './TextEditor';

export const Header = () => {
    const saveContent = () => {
        console.log(TextEditor)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar component="header" position='static' color='accent_color'>
                <Toolbar variant='dense'>
                    <IconButton color="base_color">
                        <ContentCopyIcon color="inherit"/>
                    </IconButton>
                    <Button color='base_color' sx={{
                        textTransform: 'none' // ボタンのテキストの小文字出力を可能にする
                    }}>
                        File
                    </Button>
                    <Button color='base_color' sx={{
                        textTransform: 'none', // ボタンのテキストの小文字出力を可能にする
                    }}>
                        Help
                    </Button>
                    <Typography fontSize="medium" color="selected_text.main" sx={{ flexGrow: 1, ml: 2 }} />
                    <IconButton color='base_color' onClick={saveContent} >
                        <PlayArrowIcon color='inherit'/>
                    </IconButton>
                    <Button color='base_color'>100%</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
