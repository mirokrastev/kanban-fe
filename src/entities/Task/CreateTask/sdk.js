import { post } from "../../../sdk";

export const createTask = async (boardId, columnId, data) => {
  const url = `boards/${boardId}/columns/${columnId}/cards/?short=true`;

  return await post(url, data);
};
