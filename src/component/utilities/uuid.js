import { v4 as uuidv4 } from "uuid";

export const generateUUID = () => {
  return typeof crypto?.randomUUID === "function"
    ? crypto.randomUUID()
    : uuidv4();
};
