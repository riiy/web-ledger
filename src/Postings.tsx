import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import AccountList from './AccountList';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
export default function Postings(props: any) {

    const [values, setValues] = React.useState<string[]>([]);

    const handleChange = (index: number, e: any) => {
        const updatedValues = values.map((value, i) => {
            if (i === index) {
                return e.target.value;
            } else {
                return value;
            }
        });
        setValues(updatedValues);

    }
    const addValue = () => {
        setValues([...values, ""]);
        props.setPostingCnt(values.length)
    };

    return (
        <Typography>
            {values.map((jump, index) => (
                <Box>
                    <AccountList cnt={index} />
                    <TextField
                        hiddenLabel
                        key={index}
                        id={"quantity-" + index}
                        value={jump || ""}
                        defaultValue="Quantity"
                        variant="filled"
                        size="small"
                        onChange={(e: any) => { handleChange(index, e) }}
                        name={"quantity-" + index}
                    />
                </Box>
            ))}
            <Button onClick={addValue} color="primary"> Add </Button>
        </Typography>
    )
}
