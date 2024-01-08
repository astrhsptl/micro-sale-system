import { manager } from "..";

export const removeUser = () => {
    manager.register("user", null);
    localStorage.removeItem("user")
};