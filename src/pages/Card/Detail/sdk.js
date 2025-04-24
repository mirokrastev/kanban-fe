import { _delete } from "../../../sdk";

export const cardDelete = async (id) => {
  const url = `cards/${id}/`;

  return await _delete(url);
}
