import {patch} from "../../../../sdk";

export const updateBoard = async (id, data) => {
  const url = `boards/${id}/`;

  return await patch(url, data);
};
