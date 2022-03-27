import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Search({ onChange, onKeyUp }) {

    return (
        <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Search"
            onChange={onChange}
            onKeyUp={onKeyUp}
        />
    );
}