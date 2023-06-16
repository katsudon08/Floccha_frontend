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
        accent_color: true;
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