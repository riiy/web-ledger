import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import AccountList from './AccountList';
import { Postings_Insert_Input } from './generated/graphql';

export default function Postings(props: any) {

    const [account, setAccount] = React.useState('');
    var posting: Postings_Insert_Input[] = [];
    const handleChange = (event: any) => {
        posting.push({account_id: account, quantity: event.target.value})
        console.log(posting)
        props.setPostings(posting)

    }
    return (
        <Typography>

                <AccountList setAccount={setAccount} />
                <TextField 
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Quantify"
                    variant="filled"
                    size="small"
                    onChange={handleChange}
                />
                <AccountList setAccount={setAccount} />
                <TextField 
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Quantify"
                    variant="filled"
                    size="small"
                    onChange={handleChange}
                />
        </Typography>
    )
}