import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
        // Name of the component
        MuiTextField: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    // border: '2px solid red',
                    // borderRadius: '10px',
                    '& label.Mui-focused': {
                        color: 'green',
                    },
                    '& input + fieldset': {
                        borderColor: '#273b91',
                        borderWidth: 2,
                    },
                    '& input:focus + fieldset': {
                        borderColor: 'red !important', // override inline-style
                    },


                    /*
                    '& input:invalid + fieldset': {
                        borderColor: 'red',
                        borderWidth: 1,
                      },
                      '& input:valid + fieldset': {
                        borderColor: 'green',
                        borderWidth: 1,
                      },
                      
                      '& input:valid:focus + fieldset': {
                        borderLeftWidth: 6,
                        padding: '4px !important', // override inline-style
                      },
                */
                },
            },
        },
    },
});
export const Form = () => {


    return (
        <Box
            component="form"
            sx={{
                width: "500px",
                maxWidth: '100%',
                margin: '0 auto',
                padding: '0 10px',
            }}
            noValidate
            autoComplete="off"
        >
            <div className="form-container">
                <ThemeProvider theme={theme}>
                    <TextField
                        required
                        id="outlined-required"
                        fullWidth
                        label="nombre"
                        placeholder="tu nombre"
                        margin="normal"

                    />
                    <TextField
                        required
                        id="outlined-required"
                        fullWidth
                        label="correo"
                        placeholder="tu correo"
                        margin="normal"
                    />
                </ThemeProvider>
                <TextField
                    id="outlined-multiline-static"
                    required
                    label="tu mensaje"
                    placeholder="tu mensaje aqui"
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                />

            </div>

        </Box>
    );
};