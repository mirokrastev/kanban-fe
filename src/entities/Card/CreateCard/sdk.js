import { post } from "../../../sdk";

export const createCard = async (data) => {
  const url = `cards/`;

  return await post(url, data);
};
