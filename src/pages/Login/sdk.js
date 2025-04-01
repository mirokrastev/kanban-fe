import {post} from "../../sdk";

export const login = async (data) => {
  const url = 'auth/login/';

  return await post(url, data);
}
