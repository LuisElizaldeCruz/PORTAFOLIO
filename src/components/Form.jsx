import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, } from '@mui/material/styles';


const themetxt = createTheme({
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

const theme2 = createTheme({
    components: {
        // Name of the component
        MuiTextField: {
            styleOverrides: {
                // Name of the slot
                root: {

                    '& label.Mui-focused': {
                        color: 'green',
                    },

                    '& fieldset': {
                        borderColor: '#273b91',
                        borderWidth: 2,
                    },
                    '& .MuiOutlinedInput-root':{
                        '&.Mui-focused fieldset': {
                            borderColor: 'red !important',
                        }
                    }
                },
            },
        },
    },
});


export const Form = () => {
    return (
        <>
            <h3 className="form-title">Contactame</h3>
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
                    <ThemeProvider theme={themetxt}>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="Nombre"
                            placeholder="Tu nombre"
                            margin="normal"

                        />
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="Asunto"
                            placeholder="Asunto"
                            margin="normal"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            label="correo"
                            placeholder="Tu correo"
                            margin="normal"
                        />
                    </ThemeProvider>
                    <ThemeProvider theme={theme2}>
                        <TextField
                            id="outlined-multiline-static"
                            required
                            label="tu mensaje"
                            placeholder="tu mensaje aqui"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            color="primary"
                        />
                    </ThemeProvider>
                </div>

            </Box>
        </>
    );
};