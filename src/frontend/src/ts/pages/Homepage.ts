import { manager } from "..";
import { Footer} from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";

const language = manager.getStatePosition("language");
const dictionary = manager.getStatePosition("dictionary");

HeaderWithSubHeader(language, dictionary);
Footer(dictionary);

const a = document.getElementById("most-popular");

a!.innerText = "asd"
console.log(a?.innerText);
