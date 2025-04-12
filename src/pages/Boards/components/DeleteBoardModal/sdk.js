import { deleteRequest } from "../../../../sdk";

export const deleteBoard = async (id) => {
  const url = `boards/${id}/`;

  return await deleteRequest(url);
};
