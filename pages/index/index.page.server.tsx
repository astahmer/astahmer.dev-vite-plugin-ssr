import { Box } from "../../theme/Box";
import { oui } from "../../theme/yes.css";
import { Counter } from "./Counter";

export function Page() {
  console.log("index page", oui);
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
      <div className={oui}>greenoui</div>
    </>
  );
}
