import { patch, post } from "../../sdk";

export const updateColumn = async (boardId, id, data) => {
  const url = `boards/${boardId}/columns/${id}/`;

  return await patch(url, data);
};

export const updateCardOrder = async (boardId, columnId, data) => {
  const url = `boards/${boardId}/columns/${columnId}/cards_reorder/`;

  return await post(url, data);
};
