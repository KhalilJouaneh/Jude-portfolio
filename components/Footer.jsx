import React from "react";
import { CssBaseline, Typography, Container } from '@mui/material';
import { useEffect } from "react";

export const Footer = () => {

    // useEffect(() => {
    //     WebFont.load({
    //         google: {
    //             families: ['Finlandica', 'Press Start 2P', 'Black Ops One']
    //         }
    //     });
    // }, []);

    return (
        <React.Fragment>
            <CssBaseline>

                <Container maxwidth="xl">

                    <footer style={{ padding: '15px', display: 'flex', justifyContent: 'space-between', marginTop: '70px' }}>

                        <Typography sx={{ fontWeight: 'bold' }} >
                            © 2022 Jude Samman. All rights reserved.
                        </Typography>
                        <Typography sx={{ marginLeft: 'auto', mr: '15px', fontWeight: 'bold' }} >
                            <a href="https://www.instagram.com/judesamman/?igshid=YmMyMTA2M2Y%3D" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Instagram &nbsp;&nbsp;&nbsp;&nbsp;
                            </a>
                            <a href="mailto:18kmj3@queensu.ca" type="email" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Email
                            </a>
                        </Typography>

                        {/* <Typography sx={{ fontWeight: 'bold' }} style={{ fontFamily: 'Finlandica' }}>
                            <a href="https://discord.gg/58pDQW69ka" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                                DISCORD
                            </a>
                        </Typography> */}
                    </footer>
                </Container>

            </CssBaseline>
        </React.Fragment >
    )

}

export default Footer;
