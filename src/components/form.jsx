import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../styles/form.css"
import {db} from '../Utilites/firbase'

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
    // const [hostel, setHostel] = useState("");
    const [rollNo, setRoll] = useState("");
    const [mob, setMob] = useState("");
    const [cardNo, setCardno] = useState("");

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const handleSubmit = (e) =>{
        // e.preventDefault();
        // db.collection("cards").add({
        //     rollNo:rollNo,
        //     mob:mob,
        //     cardNo:cardNo,
        //     currency:currency,
        // })
        // .then(() => {
        //     alert("Card details submitted successfully!")
        // })
        // .catch((error) => {
        //     alert(error.message);
        // })

        // setCardno("");
        // setCurrency("");
        // setMob("");
        // setRoll("");

        db.collection("Card Details").doc("student4").set({
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }
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
                <TextField id="outlined-basic" label="University Roll No" variant="outlined" value={rollNo} onChange={(e) =>{
                    setRoll(e.target.value)
                }} />
                <br />
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
                <TextField id="outlined-basic" label="Mess Card Number" variant="outlined" value={cardNo} onChange={(e) => {setCardno(e.target.value)}} /><br />
                <TextField id="outlined-basic" label="Mobile No" variant="outlined" value={mob} onChange={(e) => {setMob(e.target.value)}} /><br />
                <Stack spacing={2} direction="row">
                
                    <Button variant="contained" onClick={()=>{handleSubmit()}}>Submit Your Mess Card</Button>
                </Stack>
            </Box>
        </div>
    );
}