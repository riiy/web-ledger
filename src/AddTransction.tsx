import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import AccountList from './AccountList'

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

export default function AddTransactions(props: any) {
    const { open, setOpen } = props;
    const handleClose = () => setOpen(false);
    const [status, setStatus] = React.useState('*');
    const [account, setAccount] = React.useState('');
    const [date, setDate] = React.useState<Date | null>(new Date());
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            date: data.get('date'),
            status,
            account
        });
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={style}>
                <LocalDatePicker date={date} setDate={setDate} />
                <StatusSelect status={status} setStatus={setStatus} />
                <AccountList setAccount={setAccount} />
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
    );
}

function LocalDatePicker(props: any) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                inputFormat="yyyy-MM-dd"
                mask='____-__-__'
                label="Date"
                value={props.date}
                onChange={(newValue) => {
                    props.setDate(newValue);
                }}
                renderInput={(params) => <TextField id="date" name="date" {...params} />}
            />
        </LocalizationProvider>
    )
}
function StatusSelect(props: any) {

    const handleChange = (event: SelectChangeEvent) => {
        props.setStatus(event.target.value as string);
    };
    return (

        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.status}
            label="Status"
            autoWidth
            onChange={handleChange}
        >
            <MenuItem value={"*"}>cleared</MenuItem>
            <MenuItem value={"!"}>pending</MenuItem>
            <MenuItem value={""}>unmarked</MenuItem>
        </Select>
    )
}
