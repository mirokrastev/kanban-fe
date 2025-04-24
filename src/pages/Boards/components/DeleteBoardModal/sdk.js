import { _delete } from "../../../../sdk";

export const deleteBoard = async (id) => {
  const url = `boards/${id}/`;

  return await _delete(url);
};
