import {patch} from "../../sdk";

export const updateColumn = async (boardId, id, data) => {
  const url = `boards/${boardId}/columns/${id}/`;

  return await patch(url, data);
};
