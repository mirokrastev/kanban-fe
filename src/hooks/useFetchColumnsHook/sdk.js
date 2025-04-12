import { get } from "../../sdk";

export const columnsList = async (boardId) => {
  const url = `boards/${boardId}/columns/`;
  const response = await get(url);

  return await response.json();
};
