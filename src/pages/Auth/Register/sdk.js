import { post } from "../../../sdk";

export const register = async (data) => {
  const url = "auth/register/";

  return await post(url, data);
};
