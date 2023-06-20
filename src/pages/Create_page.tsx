import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Button } from "@mui/material"
import { TextEditor } from "../components/TextEditor"
import { FlowChart } from "../components/FlowChart"
import { Console } from "../components/Console"

// あとで、コンポーネントの細分化を行う

export const Create_page = () => {
    return (
        <>
            {/* テキストエディタ、プログラミングフローチャート */}
            <Grid
                container
                direction="row"
                sx={{ height: "70%" }}
            >
                <Grid item xs>
                    <Grid
                        container
                        xs
                        direction="column"
                        // theme colorは.mainのような形で書く必要がある
                        sx={{ bgcolor: "main_color.main", border: 0.5, height: "100%", pl: 2, pr: 2 }}
                    >
                        {/* Drawerにファイル一覧を実装する */}

                        {/* Draft.jsでのテキストエディタ */}
                        <Box sx={{
                            height: "100%", width: "100%",
                            backgroundColor: "#FFFFFF"
                        }}>
                            {/* テキストエディタのパート */}
                            <TextEditor />
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs>
                    <Grid
                        container
                        xs
                        direction="column"
                        sx={{ bgcolor: "main_color.main", border: 0.5, height: "100%" }}
                    >
                        <Box sx={{
                            height: "100%", width: "100%",
                            backgroundColor: "#FFFFFF"
                        }}>
                            {/* プログラムチャートのパート */}
                            <FlowChart />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            {/* コンソール */}
            <Grid
                container
                xs
                sx={{ bgcolor: "accent_color.main", border: 0.5, height: "30%", pr: 1, pl: 1 }}
            >
                {/* タブ機能の実装 */}
                <Box sx={{ height: "20%", width: "100%", color: "base_color.main", mb: 0.4, ml: 0.5 }}>
                    {/* Gridで囲むこと */}
                    {/* ボタンのサイズを少し小さくする */}
                    <Button size="small" color="base_color" variant="text">log</Button>
                    <Button size="small" color="selected_base_color" variant="text" sx={{ml: 0.5}}>output</Button>
                </Box>
                <Box sx={{
                    height: "80%", width: "100%",
                    backgroundColor: "#FFFFFF"
                }}>
                    {/* コンソール出力のパート (エラー等)*/}
                    <Console />
                </Box>
            </Grid>
        </>
    )
}
