import type { PropsWithChildren } from "react";

import { ThemeSprinkles, themeSprinkles } from "../theme/theme.css";

export const Box = ({ children, ...props }: BoxProps) => {
    const className = themeSprinkles(props);
    console.log({ className });
    return <div className={className} children={children} />;
};

export type BoxProps = PropsWithChildren<ThemeSprinkles>;
