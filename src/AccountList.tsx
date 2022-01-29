import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useAccountsQuery, AccountsQuery } from './generated/graphql'
import Box from '@mui/material/Box';
export default function AccountsList(props: any) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<AccountsQuery["accounts"]>([]);
    const loading = open && options.length === 0;
    const [account, setAccount] = React.useState('');
    const { data } = useAccountsQuery({
        variables: {
        },
    });
    React.useEffect(() => {
        let active = true;
        if (!loading) {
            return undefined;
        }
        (async () => {
            if (active) {
                if (data) {
                    setOptions(data.accounts);
                }
            }
        })();
        return () => {
            active = false;
        };
    }, [loading]);
    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);
    let account_cnt: number = parseInt(props.cnt) + 1
    return (
        <Box>
        <input
        value={account}
        hidden
        name={"account-" + props.cnt}
        onChange={()=>{}}
        />
        <Autocomplete
            id={account}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            onChange={(event: any, newValue: any | null) => { setAccount(newValue?.id) }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={"Account " + account_cnt}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
        </Box>
    )
}
