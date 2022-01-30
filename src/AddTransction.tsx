import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import { useInsertTransactionMutation } from "./generated/graphql"
import Postings from "./Postings";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
interface Posting {
    account_id?: FormDataEntryValue | null,
    quantity?: FormDataEntryValue | null | number
}
export default function AddTransactions(props: any) {
    const { open, setOpen } = props;
    const handleClose = () => setOpen(false);
    const [status, setStatus] = React.useState("*");
    const [date, setDate] = React.useState<Date | null>(new Date());
    const [postingCnt, setPostingCnt] = React.useState(2)
    const [payee_payer, setPayee] = React.useState("");
    const [comment, setComment] = React.useState("");
    const postings: Posting[] = [];
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form_data = new FormData(event.currentTarget);
        let quantity: number = 0
        let empty_quantity_posting: Posting = {}
        for (let i = 0; i < postingCnt + 1; i++) {
            if (form_data.get("quantity-" + i) && form_data.get("account-" + i)) {
                postings.push({ account_id: form_data.get("account-" + i), quantity: form_data.get("quantity-" + i) })
                quantity += parseInt(form_data.get("quantity-" + i)?.toString() || "")
            } else {
                empty_quantity_posting.account_id = form_data.get("account-" + i)
            }
        }
        if (empty_quantity_posting.account_id) {
            postings.push({ account_id: empty_quantity_posting.account_id, quantity: -quantity })
        }
        insert_transaction();
    }
    const tags = { "key": "value" }
    const [insert_transaction, { error, data }] = useInsertTransactionMutation({
        variables: { comment, payee_payer, status, tags, trans_date: date, postings: { data: postings } }
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

                <TextField
                    id="payee_payer"
                    label="Payee/Payer"
                    variant="outlined"
                    style={{ width: 100 }}
                    onChange={(e: any) => { setPayee(e.target.value) }}
                />
                <TextField
                    hiddenLabel
                    id="comments"
                    label="Comments"
                    variant="outlined"
                    defaultValue={comment}
                    onChange={(e: any) => { setComment(e.target.value) }}
                />
                <Postings setPostingCnt={setPostingCnt} />
                <Button
                    type="submit"
                    variant="contained"
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
                mask="____-__-__"
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
