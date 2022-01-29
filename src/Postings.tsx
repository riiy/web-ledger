import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Typography } from '@mui/material';
import AccountList from './AccountList';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
export default function Postings(props: any) {

    const [values, setValues] = React.useState<string[]>(["", ""]);

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
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <AccountList cnt={index} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            hiddenLabel
                            key={index}
                            id={"quantity-" + index}
                            value={jump || ""}
                            onChange={(e: any) => { handleChange(index, e) }}
                            name={"quantity-" + index}
                            type="number"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        />
                    </Grid>
                </Grid>
            ))}
            <Button onClick={addValue} color="primary"> Add Posting</Button>
        </Typography>
    )
}
