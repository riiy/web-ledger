import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Hotkeys from 'react-hot-keys';
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Dashboard from "./pages/dashboard/Dashboard"
import { RequireAuth } from './useAuth'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function App() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Hotkeys
            keyName="shift+a,alt+s"
            onKeyUp={handleOpen}
        >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
        <Box component="form" noValidate onSubmit={handleClose} sx={{ mt: 3 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>...</LocalizationProvider>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
                </Box>
            </Modal>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <Dashboard />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </div>
        </Hotkeys>
    );
}
