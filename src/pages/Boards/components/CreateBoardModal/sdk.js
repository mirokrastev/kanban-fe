import { post } from "../../../../sdk";

export const createBoard = async (data) => {
  const url = "boards/";
  return await post(url, data);
};
