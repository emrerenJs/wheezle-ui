import { useMemo, useState } from "react";
import { ThemeProps } from "./Theme.types";
import ThemeContext from "./Theme.context";

export const Theme = (props: ThemeProps) => {
    const { children, defaultTheme } = props;

    const [theme, setTheme] = useState(defaultTheme);

    const themeSettings = useMemo(
        () => ({ theme, setTheme }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={themeSettings}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
};
