import { put } from "../../../sdk";

export const cardEdit = async (id, data) => {
  const url = `cards/${id}/`;

  return await put(url, data);
};
