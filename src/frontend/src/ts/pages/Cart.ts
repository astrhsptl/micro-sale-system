import { AvailableDictionaryType, manager } from "..";
import { Footer } from "../components/Footer";
import { HeaderWithSubHeader } from "../components/HeaderWithSubHeader";

const language = manager.getStatePosition("language");
const dictionary: AvailableDictionaryType = manager.getStatePosition("dictionary");

const Cart = async () => {
};

await Cart();
HeaderWithSubHeader(language, dictionary);
await Footer(dictionary);
