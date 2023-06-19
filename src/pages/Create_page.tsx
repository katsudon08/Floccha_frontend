import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Button } from "@mui/material"

// あとで、コンポーネントの細分化を行う

export const Create_page = () => {
    return (
        <>
            <Grid
                container
                direction="row"
                sx={{ height: "80%" }}
            >
                <Grid item xs>
                    <Grid
                        container
                        xs
                        direction="column"
                        // 21, 34行目のbgcolorにテーマが当てられない
                        sx={{ bgcolor: "main_color.main", border: 0.5, height: "100%", padding: 1.8 }}
                    >
                        <Box sx={{ height: "100%", width: "100%", backgroundColor: "#FFFFFF" }}>

                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs>
                    <Grid
                        container
                        xs
                        direction="column"
                        // theme colorは.mainのような形で書く必要がある
                        sx={{ bgcolor: "main_color.main", border: 0.5, height: "100%", padding: 1.8 }}
                    >
                        <Box sx={{ height: "100%", width: "100%", backgroundColor: "#FFFFFF" }}>

                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                xs
                sx={{ bgcolor: "accent_color.main", border: 0.5, height: "20%", padding: 0.9 }}
            >
                <Box sx={{ height: "100%", width: "100%", backgroundColor: "#FFFFFF" }}>

                </Box>
            </Grid>
        </>
    )
}
