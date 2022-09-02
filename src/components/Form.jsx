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

const validarDatos2 = () => {
    const nombre = document.querySelector('#nombre');
    if (nombre.value !== "") {
        console.log(nombre.value);
    } else {
        /*
                console.log("El campo esta vacio");
                const colorCampo = themetxt.components.MuiTextField.styleOverrides.root["& input + fieldset"];
                colorCampo.borderColor = "error"
                */
    }
}



export const Form = () => {
    const [datos, setDatos] = useState({});
    const [titulo, setTitulo] = useState("");
    const [leyenda, setLeyenda] = useState("");
    const [errorTitulo, setErrorTitulo] = useState(false);
    
    const validarDatos = (e) => {
        e.preventDefault();
    }


    return (
        <section className="contacto">
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
                            onChange={(e) => {
                                setTitulo(e.target.value);
                            }}
                            error={false}
                            required
                            id="nombre"
                            fullWidth
                            label="Nombre"
                            placeholder="Tu nombre"
                            margin="normal"

                        />
                        <TextField
                            required
                            id="asunto"
                            fullWidth
                            label="Asunto"
                            placeholder="Asunto"
                            margin="normal"
                        />
                        <TextField
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
                    onClick={validarDatos}
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