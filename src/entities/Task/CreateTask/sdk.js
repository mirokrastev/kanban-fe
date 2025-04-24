import { post } from "../../../sdk";

export const createTask = async (data) => {
  const url = `cards/`;

  return await post(url, data);
};
