import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AppBar from './AppBar';
import Drawer from './Drawer'
import Button from "@mui/material/Button";

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
    display: 'none',
});

function UploadButtons() {
    const handleCapture = (event: any) => {
        const fileReader = new FileReader();
        const file = event.target.files[0];

        fileReader.readAsText(file);


        fileReader.onload = (e) => {
            const res: any = e.target?.result;
            let lines: any = res?.split('\n');
            for (var line = 0; line < lines.length; line++) {
                console.log(lines[line]);
            }
        };
    };

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
                <Input accept="text/*" id="contained-button-file"
                    onChange={handleCapture}

                    multiple type="file" />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
            <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </Stack>
    );
}

export default function App() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <UploadButtons />
                </Container>
            </Box>
        </Box>
    );
}
