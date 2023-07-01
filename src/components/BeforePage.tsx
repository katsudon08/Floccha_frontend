import { Box, Grid } from '@mui/material'
import React from 'react'
import { Create_page } from '../pages/Create_page'

export const BeforePage = () => {
    return (
        <Box sx={{ height: "100%", width: "100%" }}>
            <Grid
                container
                direction="column"
                sx={{ minHeight: "100vh", maxHeight: "100vh", minWidth: "100vh" }}
            >
                {/* <Grid item xs="auto">
                        <Header />
                    </Grid> */}
                <Grid item xs sx={{ backgroundColor: "#1526" }}>
                    <Create_page />
                    {/* <TextEditor /> */}
                </Grid>
                {/* <Grid item xs sx={{backgroundColor: "#1526"}}> */}
                {/* 生成画面を書く */}
                {/* <Create_page /> */}
                {/* </Grid> */}
                {/* <Grid item xs="auto"> */}
                {/* <Footer /> */}
                {/* </Grid> */}
            </Grid>
        </Box>
    )
}
