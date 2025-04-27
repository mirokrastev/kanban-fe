import { _delete } from "../../../sdk";

export const deleteColumn = async (boardId, id) => {
  const url = `boards/${boardId}/columns/${id}/`;

  return await _delete(url);
};
