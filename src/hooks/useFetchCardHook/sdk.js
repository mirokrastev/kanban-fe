import { get } from "../../sdk";

export const cardDetail = async (cardId) => {
  const url = `cards/${cardId}/`;

  return await get(url);
};
