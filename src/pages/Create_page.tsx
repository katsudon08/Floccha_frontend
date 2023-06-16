import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

export const Create_page = () => {
    return (
        <Grid
            container
            direction="row"
        >
            <Grid item xs>
                <Box sx={{ backgroundColor: "#383838", borderColor: "#000000" }}>左側</Box>
            </Grid>

            <Grid item xs>
                <Box sx={{ backgroundColor: "#383838", borderColor: "#000000" }}>右側</Box>
            </Grid>
        </Grid>
    )
}
