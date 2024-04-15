import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import WikipediaSearch from '../WikipediaSearch/WikipediaSearch'

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#66bd51',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#97d289',
    botFontColor: '#fff',
    userBubbleColor: '#0cb3c9',
    userFontColor: '#fff',
}

export default class Contenido extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot 
                    steps={[
                        {
                            id: "1",
                            message: "¡Hola! Bienvenido a la atención del asistente virtual de Ltec. Por favor ingrese su nombre",
                            trigger: "2"
                        },
                        {
                            id: "2",
                            user: true,
                            validator: (value) => {
                                if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                                    return true;
                                }
                                else {
                                    return 'Por favor, ingrese un nombre válido';
                                }
                            },
                            trigger: "3"
                        },
                        {
                            id: "3",
                            message: "Hola {previousValue}, por favor seleccione una opción",
                            trigger: "4"
                        },
                        {
                            id: "4",
                            options: [
                                {value: "y", label: "Consultas Generales", trigger: "6A"},
                                {value: "n", label: "Contactar un ejecutivo", trigger: "6B"},
                            ]
                        },
                        {
                            id: "6A",
                            message: "Por favor, seleccione lo que busca",
                            trigger: "seleccion"
                        },
                        {
                            id: "6B",
                            message: "Im sorry if I cannot be of help to you. See you later",
                            end: true
                        },
                        {
                            id: "seleccion",
                            options: [
                                {value: "f", label: "Firma Folio", trigger: "7A"},
                                {value: "b", label: "Folios", trigger: "7B"},
                                {value: "im", label: "Informes Mensuales", trigger: "7C"},
                                {value: "ep", label: "Estados de Pago", trigger: "7B"},
                                {value: "u", label: "Usuarios", trigger: "7B"},
                                {value: "e", label: "En caso de error", trigger: "7B"},
                            ]
                        },
                        {
                            id: "7A",
                            message: "Seleccione su perfil",
                            trigger: "seleccionPerfil"
                        },
                        {
                            id: "7B",
                            message: "seleccione una opción",
                            trigger: "seleccionFolio"
                        },
                        {
                            id: "7C",
                            message: "Seleccione una opción",
                            trigger: "seleccionInformes"
                        },
                        {
                            id: "seleccionPerfil",
                            options: [
                                {value: "if", label: "Inspector Fiscal", trigger: "9"},
                                {value: "res", label: "Residente / ITO", trigger: "9"},
                                {value: "pin", label: "Especialista", trigger: "9"},
                            ]
                        },
                        {
                            id: "seleccionFolio",
                            options: [
                                {value: "creacion", label: "Creación de folio", trigger: "9"},
                                {value: "adjuntar", label: "Adjuntar archivos", trigger: "9"},
                                {value: "alerta", label: "Folio alerta", trigger: "9"},
                                {value: "editar", label: "editar folio", trigger: "9"},
                            ]
                        },
                        {
                            id: "seleccionInformes",
                            options: [
                                {value: "editarif", label: "Editar IM If", trigger: "9"},
                                {value: "editares", label: "Editar IM Residente", trigger: "9"},
                                {value: "subcontratista", label: "Subcontratistas", trigger: "9"},
                                {value: "accid", label: "Accidentados", trigger: "9"},
                                {value: "resi", label: "Residuos", trigger: "9"},
                            ]
                        },
                        {
                            id: "9",
                            component: <WikipediaSearch />,
                            asMessage: true,
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "preguntaVuelta",
                            message: "Do you need to know anything else?",
                            trigger: "respuestaVuelta",
                        }, 
                        {
                            id: "respuestaVuelta",
                            options: [
                                {value: "y", label: "Yes", trigger: "6A"},
                                {value: "n", label: "No", trigger: "6B"},
                            ],
                        }
                    ]}
                />
            </ThemeProvider>
        )
    }
}
