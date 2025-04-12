import { get } from "../../sdk";

export const boardsList = async () => {
  const url = "boards/";
  return await get(url);
};
