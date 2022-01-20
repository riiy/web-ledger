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
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


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
    const handleOpen = () => {
        setOpen(true);
        setStatus("*");
    }
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState<Date | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            date: data.get('date'),
            status
        });
    }
    const [status, setStatus] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    };

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
                <Box component="form" noValidate onSubmit={handleSubmit} sx={style}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            inputFormat="yyyy-MM-dd"
                            mask='____-__-__'
                            label="Trans Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField id="date" name="date" {...params} />}
                        />
                    </LocalizationProvider>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        autoWidth
                        onChange={handleChange}
                    >
                        <MenuItem value={"*"}>cleared</MenuItem>
                        <MenuItem value={"!"}>pending</MenuItem>
                        <MenuItem value={""}>unmarked</MenuItem>
                    </Select>
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
