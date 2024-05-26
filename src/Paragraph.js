import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);
  return <p class={context.Theme}>ándijsandinasdiasndisabdnasidnb</p>;
}
export default Paragraph;
