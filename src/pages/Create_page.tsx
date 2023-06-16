import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Button } from "@mui/material"
import Container from "@mui/material/Container"

export const Create_page = () => {
    return (
        <Grid
            container
            direction="row"
        >
            <Grid item xs>
                <Grid
                    container
                    xs
                    direction="column"
                    sx={{ backgroundColor: "#383838", border: 0.5 }}
                >
                    <Button>text</Button>
                    <Button>text</Button>
                    <Button>text</Button>
                    <Button>text</Button>
                    <Button>text</Button>
                </Grid>
            </Grid>

            <Grid item xs>
                <Grid
                    container
                    xs
                    direction="column"
                    sx={{ backgroundColor: "#383838", border: 0.5 }}
                >
                    <Button>text</Button>
                    <Button>text</Button>
                    <Button>text</Button>
                    <Button>text</Button>
                    <Button>text</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
