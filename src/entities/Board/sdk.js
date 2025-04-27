import { post } from "../../sdk";

export const updateColumnOrder = async (boardId, data) => {
  const url = `boards/${boardId}/columns_reorder/`;

  return await post(url, data);
};
