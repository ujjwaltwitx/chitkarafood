import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import "../styles/form.css"

const currencies = [
    {
        value: 'Armstrong',
        label: 'Armstrong',
    },
    {
        value: 'MarcoPolo',
        label: 'MarcoPolo',
    },
    {
        value: 'Magellan',
        label: 'Magellan',
    },
    {
        value: 'IBN',
        label: 'IBN',
    },
    {
        value: 'Pi',
        label: 'Pi',
    },
];

export default function BasicTextFields() {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <div id="form">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="University Roll No" variant="outlined" /><br />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Your Hostel"
                    value={currency}
                    onChange={handleChange}
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField> <br />
                <TextField id="outlined-basic" label="Mess Card Number" variant="outlined" /><br />
                <TextField id="outlined-basic" label="Mobile No" variant="outlined" /><br />
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Submit Your Mess Card</Button>
                </Stack>
            </Box>
        </div>
    );
}