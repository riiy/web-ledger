import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import { useQuery, gql } from '@apollo/client';

const QUERY_ACCOUNTS = gql`
  query ACCOUNTS {
    accounts {
      id
      alias_name
      name
      default_commodity
      postings {
        quantity
        updated_at
      }
    }
  }
`;
interface Postings {
    quantity: Number;
    update_at: string;
}
interface Accounts {
    id: string;
    alias_name: string;
    name: string;
    default_commodity: string;
    postings: Postings[];
}

interface AccountsData {
    accounts: Accounts[];
}

export default function AccountsList(props: any) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<readonly Accounts[]>([]);
    const loading = open && options.length === 0;
    const { data } = useQuery<AccountsData>(QUERY_ACCOUNTS);
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
    return (
        <Autocomplete
            id="asynchronous-demo"
            sx={{ width: 300 }}
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
            onChange={(event: any, newValue: Accounts | null) => {props.setAccount(newValue?.id)}}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Asynchronous"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}
