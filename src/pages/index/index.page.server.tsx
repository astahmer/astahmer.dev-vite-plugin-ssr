import { Box } from "../../theme/Box";
import { colorMode } from "../../theme/color-mode.css";
import { themeSprinkles } from "../../theme/sprinkles.css";
import { Counter } from "./Counter";

export function Page() {
    return (
        <>
            <h1>Welcome</h1>
            This page is:
            <ul>
                <li>Rendered to HTML.</li>
                <li>
                    Interactive. <Counter />
                </li>
            </ul>
            <Box color="red.100">boxboxbox</Box>
            <div className={colorMode.light}>
                <div className={themeSprinkles({ backgroundColor: "main" })}>light brandbrandbrand</div>
            </div>
            <div className={colorMode.dark}>
                <div className={themeSprinkles({ backgroundColor: "main" })}>dark brandbrandbrand</div>
            </div>
        </>
    );
}
