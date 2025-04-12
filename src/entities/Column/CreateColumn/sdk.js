import { post } from "../../../sdk";

export const createColumn = async (boardId, data) => {
  const url = `boards/${boardId}/columns/`;

  return await post(url, data);
};
