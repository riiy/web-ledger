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
import { useMutation, gql } from '@apollo/client';

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

const MY_MUTATION_MUTATION = gql`
  mutation MyMutation($comment: String = "", $payee_payer: String = "", $status: bpchar = "", $tags: jsonb = "", $trans_date: date = "", $postings: postings_arr_rel_insert_input = {data: {account_id: "", currency_id: "", quantity: ""}, on_conflict: {constraint: postings_pkey, update_columns: account_id}}) {
    insert_transactions(objects: {comment: $comment, payee_payer: $payee_payer, tags: $tags, status: $status, trans_date: $trans_date, postings: $postings}) {
      affected_rows
      returning {
        id
        trans_date
      }
    }
  }
`;

interface posting {
    account_id: string,
    currency_id: string,
    quantify: number
}
export default function AddTransactions(props: any) {
    const { open, setOpen } = props;
    const handleClose = () => setOpen(false);
    const [status, setStatus] = React.useState('*');
    const [account, setAccount] = React.useState('');
    const [date, setDate] = React.useState<Date | null>(new Date());
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form_data = new FormData(event.currentTarget);

        console.log({
            date: form_data.get('date'),
            status,
            account_id: account
        });
        insert_transaction();
    }
        const comment = 'comment';
        const payee_payer = 'pdd';
        const tags = {"key": "value"}
        const currency_id = '473b25e3-7cbf-494d-8926-1cc03506706e'
        const quantity = 99
        const postings_list = {data: [{account_id: account, currency_id, quantity}, {account_id: account, currency_id, quantity}]}
        const [insert_transaction, { error, data }] = useMutation(MY_MUTATION_MUTATION, {
            variables: {comment, payee_payer, status,tags, trans_date:date, postings:postings_list}
        });
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
