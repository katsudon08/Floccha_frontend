import * as PaletteColorOptions from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    interface PaletteOptions {
        base_color?: PaletteColorOptions;
        main_color?: PaletteColorOptions;
        accent_color?: PaletteColorOptions;
        selected_text?: PaletteColorOptions;
        unselected_text?: PaletteColorOptions;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        base_color: true;
        accent_color: true;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsColorOverrides {
        selected_text: true;
        unselected_text: true;
        base_color: true;
    }
}

declare module "@mui/material/AppBar" {
    interface AppBarPropsColorOverrides {
        accent_color: true;
    }
}

declare module "@mui/material/IconButton" {
    interface IconButtonPropsColorOverrides {
        base_color: true;
    }
}

declare module "@mui/material/Grid" {
    interface GridPropsColorOverrides {
        main_color: true;
        accent_color: true;
    }
}

declare module "@mui/material/Box" {
    interface BoxPropsColorOverrides {
        base_color: true;
    }
}

declare module "@mui/material/Tab" {
    interface TabPropsColorOverrides {
        selected_color: true;
        unselected_color: true;
    }
}