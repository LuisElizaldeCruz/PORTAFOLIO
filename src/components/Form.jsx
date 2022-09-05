import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import '../assets/css/Form.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const themetxt = createTheme({
    components: {
        // Name of the component
        MuiTextField: {
            styleOverrides: {
                // Name of the slot
                root: {
                    '& label.Mui-focused': {
                        color: 'black',
                    },
                    '& input + fieldset': {
                        borderColor: '#273b91',
                        borderWidth: 2,
                    },
                    '& input:focus + fieldset': {
                        borderColor: '#834bff !important', // override inline-style
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

const themeTxtMultiLine = createTheme({
    components: {
        // Name of the component
        MuiTextField: {
            styleOverrides: {
                // Name of the slot
                root: {

                    '& label.Mui-focused': {
                        color: 'black',
                    },

                    '& fieldset': {
                        borderColor: '#273b91',
                        borderWidth: 2,
                    },
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: '#834bff !important',
                        }
                    }
                },
            },
        },
    },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#2c387e',
    '&:hover': {
        backgroundColor: '#4615b2',
    },
}));


export const Form = () => {

    const [nombre, setNombre] = useState(null);
    const [asunto, setAsunto] = useState(null);
    const [correo, setCorreo] = useState(null);
    const [mensaje, setMensaje] = useState(null);
    //const [error, setError] = useState(false);

    const manejarMensaje = (e) => {
        e.preventDefault();
        console.log("se presiono el boton")
        if ((nombre && asunto && correo && mensaje) !== null) {
            if ((nombre && asunto && correo && mensaje) !== "") {
                console.log("campos llenos");
            }
            else {
                console.log("campos vacios");
            }
        }
        else{
            console.log("campos vacios");
        }
    }


    return (
        <section className="contacto" id="contact">
            <h4 className="form-title">Contactame</h4>
            <Box
                component="form"
                sx={{
                    width: "500px",
                    maxWidth: '100%',
                    margin: '0 auto',
                    padding: '0 10px',
                    // display: 'flex',
                    // flexDirection: 'column',
                }}
                noValidate
                autoComplete="off"
            >
                <div className="form-container">
                    <ThemeProvider theme={themetxt}>

                        <TextField
                            onBlur={(e) => {
                                setNombre(e.target.value);
                                console.log(nombre);
                                console.log("se perdio el foco")
                              //  nombre ? setError(false) : setError(true);
                                //nombre ? console.log("elemento lleno") : console.log("elemento vacio");
                            }}
                            error={(nombre === "") ? true : false}
                            required
                            id="nombre"
                            fullWidth
                            label="Nombre"
                            placeholder="Tu nombre"
                            margin="normal"

                        />
                        <TextField
                            onBlur={(e) => {
                                setAsunto(e.target.value);
                            }}
                            error={(asunto === "") ? true : false}
                            required
                            id="asunto"
                            fullWidth
                            label="Asunto"
                            placeholder="Asunto"
                            margin="normal"
                        />
                        <TextField
                            onBlur={(e) => {
                                setCorreo(e.target.value);
                            }}
                            error={(correo === "") ? true : false}
                            required
                            id="correo"
                            fullWidth
                            label="Correo"
                            placeholder="Tu correo"
                            margin="normal"
                        />
                    </ThemeProvider>
                    <ThemeProvider theme={themeTxtMultiLine}>
                        <TextField
                            onBlur={(e) => {
                                setMensaje(e.target.value);
                            }}
                            error={(mensaje === "") ? true : false}
                            id="mensaje"
                            required
                            label="Mensaje"
                            placeholder="tu mensaje aqui"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            color="primary"
                        />
                    </ThemeProvider>
                </div>
                <ColorButton
                    type="submit"
                    onClick={manejarMensaje}
                    id="btn-send"
                    variant="contained"
                    endIcon={<SendIcon />}
                >
                    enviar
                </ColorButton>
            </Box>
        </section >
    );
};